import { PlusOutlined } from "@ant-design/icons";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import {
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  message,
  Row,
  Select,
  Space,
  Upload,
} from "antd";
import ImgCrop from "antd-img-crop";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
const { Option } = Select;
const key = "updatable";
const Header = () => {
  const [visible, setVisible] = useState(false);
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      style={{ backgroundColor: "blueviolet", height: "100px" }}
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
    >
      <List>
        {" "}
        <div className="search-btn w-100 d-flex align-items-center">
          <div className="input-group container flex-nowrap">
            <Input.Search
              style={{ marginTop: "25px", backgroundColor: "#8139c3" }}
              type="text"
              placeholder="Search Your Desire Destinations Or Events"
              enterButton
            />
          </div>
        </div>
      </List>
    </Box>
  );
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;

    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);

        reader.onload = () => resolve(reader.result);
      });
    }

    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  const openMessage = () => {
    setVisible(false);
    message.loading({
      content: "Loading...",
      key,
    });
    setTimeout(() => {
      message.success({
        content: "Success!",
        key,
        duration: 2,
      });
    }, 1500);
  };
  return (
    <>
      <div className="dorne-search-form d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="search-close-btn" id="closeBtn">
                <i className="pe-7s-close-circle" aria-hidden="true" />
              </div>
              <form action="#" method="get">
                <input
                  type="search"
                  name="caviarSearch"
                  id="search"
                  placeholder="Search Your Desire Destinations or Events "
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <header className="header_area" id="header">
        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className="col-12 h-100">
              <nav className="h-100 navbar navbar-expand-lg">
                <a className="navbar-brand" href="/">
                  <img src="Assets/img/core-img/logo.png" alt="" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#dorneNav"
                  aria-controls="dorneNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="fa fa-bars" />
                </button>
                {/* Nav */}
                <div className="collapse navbar-collapse" id="dorneNav">
                  <ul className="navbar-nav mr-auto" id="dorneMenu">
                    <li className="nav-item active">
                      <Link to="/" className="nav-link">
                        Home <span className="sr-only">(current)</span>
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Explore{" "}
                        <i className="fa fa-angle-down" aria-hidden="true" />
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <Link to="/" className="dropdown-item">
                          Home
                        </Link>
                        <Link to="/explore" className="dropdown-item">
                          Explore
                        </Link>
                        <Link to="/listing" className="dropdown-item">
                          Listing
                        </Link>
                        <Link to="/single-listing" className="dropdown-item">
                          Single Listing
                        </Link>
                        <Link to="/contact" className="dropdown-item">
                          Contact
                        </Link>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown2"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Listings{" "}
                        <i className="fa fa-angle-down" aria-hidden="true" />
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown2"
                      >
                        <Link to="/" className="dropdown-item">
                          Home
                        </Link>

                        <Link to="/listing" className="dropdown-item">
                          Listing
                        </Link>
                        <Link to="/single-listing" className="dropdown-item">
                          Single Listing
                        </Link>
                      </div>
                    </li>
                    <li className="nav-item">
                      <Link to="/contact" className="nav-link">
                        Contact
                      </Link>
                    </li>
                  </ul>
                  {/* Search btn */}

                  {["top"].map((anchor) => (
                    <Fragment key={anchor}>
                      <Button onClick={toggleDrawer(anchor, true)}>
                        <div className="dorne-search-btn">
                          <a id="search-btn" href="#">
                            <i className="fa fa-search" aria-hidden="true"></i>
                            Search
                          </a>
                        </div>
                      </Button>
                      <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                      >
                        {list(anchor)}
                      </SwipeableDrawer>
                    </Fragment>
                  ))}
                  <div></div>

                  <div className="dorne-signin-btn">
                    <Link to="/login">Sign in or Register</Link>
                  </div>
                  <div className="dorne-add-listings-btn">
                    <Button
                      style={{
                        color: "#fff",
                      }}
                      onClick={showDrawer}
                      icon={<PlusOutlined />}
                    >
                      Add Listings +
                    </Button>
                    <Drawer
                      title="Create a new "
                      width={600}
                      onClose={onClose}
                      visible={visible}
                      bodyStyle={{
                        paddingBottom: 80,
                      }}
                      extra={
                        <Space>
                          <Button
                            onClick={onClose}
                            style={{ borderRadius: "50px" }}
                          >
                            Cancel
                          </Button>
                          <Button
                            onClick={openMessage}
                            style={{
                              backgroundColor: "#7643ea",
                              color: "#fff",
                              borderRadius: "50px",
                            }}
                          >
                            Submit
                          </Button>
                        </Space>
                      }
                    >
                      <Form layout="vertical" hideRequiredMark>
                        <Row gutter={16}>
                          <Col span={12}>
                            <Form.Item
                              name="name"
                              label="Name"
                              rules={[
                                {
                                  required: true,
                                  message: "Please enter user name",
                                },
                              ]}
                            >
                              <Input placeholder="Please enter user name" />
                            </Form.Item>
                          </Col>
                          <Col span={12}>
                            <Form.Item
                              name="url"
                              label="Url"
                              rules={[
                                {
                                  required: true,
                                  message: "Please enter url",
                                },
                              ]}
                            >
                              <Input
                                style={{
                                  width: "100%",
                                }}
                                addonBefore="http://"
                                addonAfter=".com"
                                placeholder="Please enter url"
                              />
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row gutter={16}>
                          <Col span={12}>
                            <Form.Item
                              name="owner"
                              label="Owner"
                              rules={[
                                {
                                  required: true,
                                  message: "Please select an owner",
                                },
                              ]}
                            >
                              <Select placeholder="Please select an owner">
                                <Option value="xiao">Xiaoxiao Fu</Option>
                                <Option value="mao">Maomao Zhou</Option>
                              </Select>
                            </Form.Item>
                          </Col>
                          <Col span={12}>
                            <Form.Item
                              name="type"
                              label="Type"
                              rules={[
                                {
                                  required: true,
                                  message: "Please choose the type",
                                },
                              ]}
                            >
                              <Select placeholder="Please choose the type">
                                <Option value="private">Private</Option>
                                <Option value="public">Public</Option>
                              </Select>
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row gutter={16}>
                          <Col span={12}>
                            <Form.Item
                              name="approver"
                              label="Approver"
                              rules={[
                                {
                                  required: true,
                                  message: "Please choose the approver",
                                },
                              ]}
                            >
                              <Select placeholder="Please choose the approver">
                                <Option value="jack">Jack Ma</Option>
                                <Option value="tom">Tom Liu</Option>
                              </Select>
                            </Form.Item>
                          </Col>
                          <Col span={12}>
                            <Form.Item
                              name="dateTime"
                              label="DateTime"
                              rules={[
                                {
                                  required: true,
                                  message: "Please choose the dateTime",
                                },
                              ]}
                            >
                              <DatePicker.RangePicker
                                style={{
                                  width: "100%",
                                }}
                                getPopupContainer={(trigger) =>
                                  trigger.parentElement
                                }
                              />
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row gutter={16}>
                          <Col span={24}>
                            <Form.Item
                              name="description"
                              label="Description"
                              rules={[
                                {
                                  required: true,
                                  message: "please enter url description",
                                },
                              ]}
                            >
                              <Input.TextArea
                                rows={4}
                                placeholder="please enter url description"
                              />
                            </Form.Item>
                            <ImgCrop rotate>
                              <Upload
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                listType="picture-card"
                                fileList={fileList}
                                onChange={onChange}
                                onPreview={onPreview}
                              >
                                {fileList.length < 5 && "+ Upload"}
                              </Upload>
                            </ImgCrop>
                          </Col>
                        </Row>
                      </Form>
                    </Drawer>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
