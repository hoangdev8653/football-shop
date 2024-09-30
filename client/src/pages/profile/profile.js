import styles from "./profile.module.scss";
import { Tabs, Tab } from "./Tabs/Tabs";
import HistoryOrder from "./historyOrder";
import InfoUser from "./infoUser";
import InvoiceApp from "../pdf/Invoice";

function Profile() {
  return (
    <div className={styles.profile}>
      <div className="max-w-[1050px] mx-auto my-8 ">
        <div
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          className="text-center w-[80%] mx-auto"
        >
          <div className="flex">
            <Tabs>
              <Tab label="Thông tin tài khoản">
                <InfoUser />
              </Tab>
              <Tab label="Lịch Sử đặt hàng">
                <HistoryOrder />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
