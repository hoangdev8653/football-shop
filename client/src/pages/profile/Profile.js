import { Tabs, Tab } from "./Tabs";
import HistoryOrder from "./HistoryOrder";
import InfoUser from "./InfoUser";

function Profile() {
  return (
    <div className="w-full">
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
