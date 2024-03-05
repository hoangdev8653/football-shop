import React from "react";
import styles from "./profile.module.scss";
import userDefaute from "../../assets/user_deafaute.jpg";
import { CiStar } from "react-icons/ci";
import { Tabs, Tab } from "./Tabs/Tabs";

function profile() {
  return (
    <div className={styles.profile}>
      <div className="max-w-[1050px] mx-auto justify-center ">
        <div
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          className="text-center "
        >
          <div className="text-center my-4">
            <img
              className="w-[80px] mx-auto rounded hover:opacity-80 cursor-pointer mt-2"
              src={userDefaute}
              alt="avarta"
            />
            <div className="flex justify-center ">
              <p className="font-medium text-xl">Huy Hoàng</p>
            </div>
          </div>
          <div className="flex">
            <Tabs>
              <Tab label="Lịch Sử">
                <div className="py-4">
                  <h2 className="text-lg font-medium mb-2">Tab 1 Content</h2>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum numquam blanditiis harum
                    quisquam eius sed odit fugiat iusto fuga praesentium optio,
                    eaque rerum! Provident similique accusantium nemo autem.
                    Veritatis obcaecati tenetur iure eius earum ut molestias
                    architecto voluptate aliquam nihil, eveniet aliquid culpa
                    officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                    harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                    quia. Quo neque error repudiandae fuga? Ipsa laudantium
                    molestias eos sapiente officiis modi at sunt excepturi
                    expedita sint? Sed quibusdam recusandae alias error harum
                    maxime adipisci amet laborum.
                  </p>
                </div>
              </Tab>
              <Tab label="Lịch Sử2">
                <div className="py-4">
                  <h2 className="text-lg font-medium mb-2">Tab 2 Content</h2>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum numquam blanditiis harum
                    quisquam eius sed odit fugiat iusto fuga praesentium optio,
                    eaque rerum! Provident similique accusantium nemo autem.
                    Veritatis obcaecati tenetur iure eius earum ut molestias
                    architecto voluptate aliquam nihil, eveniet aliquid culpa
                    officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                    harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                    quia. Quo neque error repudiandae fuga? Ipsa laudantium
                    molestias eos sapiente officiis modi at sunt excepturi
                    expedita sint? Sed quibusdam recusandae alias error harum
                    maxime adipisci amet laborum.
                  </p>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default profile;
