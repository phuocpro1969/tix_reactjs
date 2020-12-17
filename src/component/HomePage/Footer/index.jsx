import React from "react";
import "./Footer.scss";
function Footer(props) {
  return (
    <footer className="wp-footer">
      <div className="container container--fixed">
        <div className="row top_footer">
          <div className="col-md-4 top_footer__left">
            <p className="footer_title_left footer_title">TIX</p>
            <div className="footer_content_left mt-2">
              <div className="f_left_content mr-4">
                <a className="f_left_1  f_left">FAQ</a>
                <a className="f_left_2 f_left">Brand Guidelines</a>
              </div>
              <div className="f_right_content">
                <a className="f_right_1 f_left">Thỏa thuận sử dụng</a>
                <a className="f_right_2 f_left">Chính sách bảo mật</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 top_footer__middle">
            <p className="footer_title_middle footer_title">Đối Tác</p>
            <div className="row col-md-12 third-party mt-2">
              <a className="wp_logo" target="_blank">
                <img
                  className="logo_f img-fluid"
                  src="../../../images/cgv.png"
                  alt="anh"
                />
              </a>
              <a className="wp_logo" target="_blank">
                <img
                  className="logo_f img-fluid"
                  src="../../../images/bhd.png"
                  alt="anh"
                />
              </a>
              <a className="wp_logo" target="_blank">
                <img
                  className="logo_f img-fluid"
                  src="../../../images/galaxycine.png"
                  alt="anh"
                />
              </a>
              <a className="wp_logo" target="_blank">
                <img
                  className="logo_f img-fluid"
                  src="../../../images/cinestar.png"
                  alt="anh"
                />
              </a>
              <a className="wp_logo" target="_blank">
                <img
                  className="logo_f img-fluid"
                  src="../../../images/404b8c4b80d77732e7426cdb7e24be20.png"
                  alt="anh"
                />
              </a>
            </div>
            <div className="row col-md-12 third-party">
              <a className="wp_logo" target="_blank">
                <img
                  className="logo_f img-fluid"
                  src="../../../images/megags.png"
                  alt="anh"
                />
              </a>
              <a className="wp_logo" target="_blank">
                <img
                  className="logo_f img-fluid"
                  src="../../../images/bt.jpg"
                  alt="anh"
                />
              </a>
              <a className="wp_logo" target="_blank">
                <img
                  className="logo_f img-fluid"
                  src="../../../images/dongdacinema.png"
                  alt="anh"
                />
              </a>
              <a className="wp_logo" target="_blank">
                <img
                  className="logo_f img-fluid"
                  src="../../../images/TOUCH.png"
                  alt="anh"
                />
              </a>
              <a className="wp_logo" target="_blank">
                <img
                  className="logo_f img-fluid"
                  src="../../../images/cnx.jpg"
                  alt="anh"
                />
              </a>
            </div>
            <div className="row col-md-12 third-party ">
              <a className="wp_logo" target="_blank">
                <img
                  className="logo_f img-fluid"
                  src="../../../images/STARLIGHT.png"
                  alt="anh"
                />
              </a>
              <a className="wp_logo" target="_blank">
                <img
                  className="logo_f img-fluid"
                  src="../../../images/dcine.png"
                  alt="anh"
                />
              </a>
              <a className="wp_logo" target="_blank">
                <img
                  className="logo_f img-fluid"
                  src="../../../images/zalopay_icon.png"
                  alt="anh"
                />
              </a>
              <a className="wp_logo" target="_blank">
                <img
                  className="logo_f img-fluid"
                  src="../../../images/payoo.jpg"
                  alt="anh"
                />
              </a>
              <a className="wp_logo" target="_blank">
                <img
                  className="logo_f img-fluid"
                  src="../../../images/VCB.png"
                  alt="anh"
                />
              </a>
            </div>
            <div className="row col-md-12 third-party">
              <a className="wp_logo" target="_blank">
                <img
                  className="logo_f img-fluid"
                  src="../../../images/AGRIBANK.png"
                  alt="anh"
                />
              </a>
              <a className="wp_logo" target="_blank">
                <img
                  className="logo_f img-fluid"
                  src="../../../images/VIETTINBANK.png"
                  alt="anh"
                />
              </a>
              <a className="wp_logo" target="_blank">
                <img
                  className="logo_f img-fluid"
                  src="../../../images/IVB.png"
                  alt="anh"
                />
              </a>
              <a className="wp_logo" target="_blank">
                <img
                  className="logo_f img-fluid"
                  src="../../../images/123go.png"
                  alt="anh"
                />
              </a>
              <a className="wp_logo" target="_blank">
                <img
                  className="logo_f img-fluid"
                  src="../../../images/laban.png"
                  alt="anh"
                />
              </a>
            </div>
          </div>
          <div className="col-md-4 top_footer__right">
            <div className="row">
              <div className="col-md-6">
                <p className="footer_title text-center">MOBILE APP</p>
                <div className="footer_app f_full mt-2">
                  <a className="link_app link_full mr-2">
                    <img src="../../../images/apple-logo.png" alt="anh" />
                  </a>
                  <a className="link_app link_full ml-2">
                    <img src="../../../images/android-logo.png" alt="anh" />
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <p className="footer_title text-center">SOCIAL</p>
                <div className="footer_social f_full mt-2">
                  <a className="link_social link_full mr-2">
                    <img src="../../../images/facebook-logo.png" alt="anh" />
                  </a>
                  <a className="link_social link_full ml-2">
                    <img src="../../../images/zalo-logo.png" alt="anh" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="hrFooter" />
        <div className="row bottom_footer no-gutters">
          <div className="col-xl-2--fixed col-xl-2 col-lg-2 col-md-2 text-center mb-4">
            <img
              className="img-fluid style_res"
              src="../../../images/zion-logo.jpg"
              alt="anh"
            />
          </div>
          <div className="col-xl-8 col-lg-8 col-sm-12 col-md-8 b_f-content">
            <h3 className="b_f-title text-center text-xl-left">
              TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
            </h3>
            <p className="text-center text-xl-left">
              Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
              Chí Minh, Việt Nam.
            </p>
            <p className="text-center text-xl-left">
              Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
            </p>
            <p className="text-center text-xl-left">
              đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
              hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
            </p>
            <p className="text-center text-xl-left">
              Số Điện Thoại (Hotline): 1900 545 436
            </p>
            <p className="text-center text-xl-left">
              Email: <a>support@tix.vn</a>
            </p>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-2 b_f-right text-center mt-1 mt-xl-0">
            <a>
              <img
                className="img-fluid style_res notice_logo"
                src="../../../images/d1e6bd560daa9e20131ea8a0f62e87f8.png"
                alt="anh"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
