import React, { useEffect } from "react";
import NavBar from "../../components/NavBar";

function Contests() {
  useEffect(() => {
    document.title = "Danh sách kỳ thi";
  }, []);
  return (
    <div>
      <NavBar />
      <div className={"flex w-full flex-col items-center justify-center"}>
        <div className={"w-4/5"}>
          <h2 className={"my-4 text-2xl text-gray-500"}>Danh sách kỳ thi</h2>
          <div className={"min-h-[60px] rounded-lg border border-gray-300 bg-[#f9f9f9] text-center drop-shadow-md"}>
            <table className={"w-full p-5"}>
              <tr>
                <th>Kỳ thi</th>
                <th>Thời gian bắt đầu</th>
                <th>Thời gian kết thúc</th>
                <th>Tình trạng</th>
                <th>Số thí sinh</th>
                <th>Thao tác</th>
              </tr>
              <tr>
                <td>Free Contest 145</td>
                <td>12:00 - 24/03/2023</td>
                <td>17:00 - 25/03/2023</td>
                <td>Đang mở</td>
                <td>50</td>
                <td>
                  <button className={'px-4 py-2.5 bg-red-200'}>Đăng ký</button>
                </td>
              </tr>
              <tr>
                <td>Free Contest 145</td>
                <td>12:00 - 24/03/2023</td>
                <td>17:00 - 25/03/2023</td>
                <td>Đang mở</td>
                <td>50</td>
                <td>
                  <button className={'px-4 py-2.5 bg-red-200'}>Đăng ký</button>
                </td>
              </tr>
              <tr>
                <td>Free Contest 145</td>
                <td>12:00 - 24/03/2023</td>
                <td>17:00 - 25/03/2023</td>
                <td>Đang mở</td>
                <td>50</td>
                <td>
                  <button className={'px-4 py-2.5 bg-red-200'}>Đăng ký</button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contests;
