import React from "react";
import { VolunteerActivism } from "@mui/icons-material";

const AboutIndoor = () => {
  return (
    <div className="h-auto sm:h-full mx-auto bg-gradient-to-r from-white to-green-300">
      <div className="pt-10 pl-10">
      <h1 className="font-semibold font-body text-xl">Indoor Plants</h1>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="w-full sm:w-1/2 ml-0 sm:ml-8">
          <span className="p-3 font-semibold">
            အိမ်တွင်းအပင်များသည် ပိုမိုကျန်းမာပျော်ရွှင်စေပြီး
            စိတ်ပိုင်းဆိုင်ရာနှင့် ရုပ်ပိုင်းဆိုင်ရာကျန်းမာရေးဆိုင်ရာ
            အကျိုးကျေးဇူးများကို ပေးဆောင်သည်။
          </span>
          <br />
          <hr />
          <hr className="my-2 border-none"></hr>

          <span className="p-3 font-semibold">
            <VolunteerActivism style={{ color: "#02cf32" }} /> စိတ်ခံစားချက်ကို
            တိုးတက်စေခြင်း။
          </span>
          <br />
          <hr />
          <hr className="my-2 border-gray-400 border-none"></hr>

          <span className="p-3 font-semibold">
            <VolunteerActivism style={{ color: "#02cf32" }} />{" "}
            ပင်ပန်းနွမ်းနယ်မှုကို လျှော့ချပေးခြင်း။
          </span>
          <br />
          <hr />
          <hr className="my-2 border-gray-400 border-none"></hr>
          <span className="p-3 font-semibold">
            <VolunteerActivism style={{ color: "#02cf32" }} /> စိတ်ဖိစီးမှုနှင့်
            စိုးရိမ်ပူပန်မှုများကို လျှော့ချပေးခြင်း။
          </span>
          <br />
          <hr />
          <hr className="my-2 border-gray-400 border-none"></hr>
          <span className="p-3 font-semibold">
            <VolunteerActivism style={{ color: "#02cf32" }} />{" "}
            စွမ်းဆောင်ရည်နှင့် အာရုံစူးစိုက်မှု တိုးတက်စေခြင်း။
          </span>
          <br />
          <hr />
          <hr className="my-2 border-gray-400 border-none"></hr>
          <span className="p-3 font-semibold">
            <VolunteerActivism style={{ color: "#02cf32" }} /> အနာကျက်ခြင်းနှင့်
            နာကျင်မှုခံနိုင်ရည်ကို မြှင့်တင်ပေးခြင်း
          </span>
          <br />
          <hr />
          <hr className="my-2 border-gray-400 border-none"></hr>
          <span className="p-3 font-semibold">
            <VolunteerActivism style={{ color: "#02cf32" }} /> လေထုအရည်အသွေးကို
            မြှင့်တင်ပေးခြင်းဖြင့် ခေါင်းကိုက်ခြင်းကို လျော့နည်းစေသည်။
          </span>
          <br />
          <hr />
          <hr className="my-2 border-gray-400 border-none"></hr>
          <span className="p-3 font-semibold">
            <VolunteerActivism style={{ color: "#02cf32" }} />{" "}
            အရေပြားခြောက်သွေ့ခြင်းနှင့် အသက်ရှူလမ်းကြောင်းဆိုင်ရာ ဝေဒနာများကို
            သက်သာစေသည်။
          </span>
          <hr />
          <hr className="my-2 border-gray-400 border-none"></hr>
        </div>
        <div className="flex flex-1 justify-end pr-28 pl-6 mt-4 sm:mt-0">
          <div className="relative left-14 sm:left-0">
            <img
              src={require("../img/pltdec.png")}
              className="h-auto w-3/4 object-cover"
              alt=""
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="transform -translate-x-8 transition-transform ease duration-200">
                <img
                  width="733"
                  height="424"
                  src="https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/ellipse-2.png"
                  className="w-full animate-spin-slow"
                  alt=""
                  loading="lazy"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIndoor;

