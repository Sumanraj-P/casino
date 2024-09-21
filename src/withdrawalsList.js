import React from 'react';
import './withdrawalsList.css'; // Assuming you are using external CSS

const WithdrawalsList = () => {
  return (
    <div className="container">
      <div className="navbar"></div>
      <div className="content">
        <h1>Withdrawals list</h1>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter the withdrawals details you are looking for"
          />
          <button className="search-btn">Search</button>
        </div>

        <div className="browse">
          <div className="withdrawals">
            <a href="#">withdrawals list</a>
          </div>
          <hr />

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Account</th>
                  <th>Bank</th>
                  <th>UPI ID</th>
                  <th>Transaction ID</th>
                  <th>Date and Time</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>123</td>
                  <td><a href="#">8441967944</a></td>
                  <td>xxxx</td>
                  <td>1234@UPI</td>
                  <td>1234567890987654321</td>
                  <td>2024-08-09 2:20:55 AM</td>
                  <td>200</td>
                  <td>
                    <p className="button">Success</p>
                  </td>
                </tr>
                <tr>
                  <td>123</td>
                  <td><a href="#">8441967944</a></td>
                  <td>xxxx</td>
                  <td>1234@UPI</td>
                  <td>1234567890987654321</td>
                  <td>2024-08-09 2:20:55 AM</td>
                  <td>200</td>
                  <td>
                    <p className="button">Success</p>
                  </td>
                </tr>
                <tr>
                  <td>123</td>
                  <td><a href="#">8441967944</a></td>
                  <td>xxxx</td>
                  <td>1234@UPI</td>
                  <td>1234567890987654321</td>
                  <td>2024-08-09 2:20:55 AM</td>
                  <td>200</td>
                  <td>
                    <p className="button">Success</p>
                  </td>
                </tr>
                <tr>
                  <td>123</td>
                  <td><a href="#">8441967944</a></td>
                  <td>xxxx</td>
                  <td>1234@UPI</td>
                  <td>1234567890987654321</td>
                  <td>2024-08-09 2:20:55 AM</td>
                  <td>200</td>
                  <td>
                    <p className="button">Success</p>
                  </td>
                </tr>
                <tr>
                  <td>123</td>
                  <td><a href="#">8441967944</a></td>
                  <td>xxxx</td>
                  <td>1234@UPI</td>
                  <td>1234567890987654321</td>
                  <td>2024-08-09 2:20:55 AM</td>
                  <td>200</td>
                  <td>
                    <p className="button">Success</p>
                  </td>
                </tr>
                <tr>
                  <td>123</td>
                  <td><a href="#">8441967944</a></td>
                  <td>xxxx</td>
                  <td>1234@UPI</td>
                  <td>1234567890987654321</td>
                  <td>2024-08-09 2:20:55 AM</td>
                  <td>200</td>
                  <td>
                    <p className="button">Success</p>
                  </td>
                </tr>
                <tr>
                  <td>123</td>
                  <td><a href="#">8441967944</a></td>
                  <td>xxxx</td>
                  <td>1234@UPI</td>
                  <td>1234567890987654321</td>
                  <td>2024-08-09 2:20:55 AM</td>
                  <td>200</td>
                  <td>
                    <p className="button">Success</p>
                  </td>
                </tr>
                <tr>
                  <td>123</td>
                  <td><a href="#">8441967944</a></td>
                  <td>xxxx</td>
                  <td>1234@UPI</td>
                  <td>1234567890987654321</td>
                  <td>2024-08-09 2:20:55 AM</td>
                  <td>200</td>
                  <td>
                    <p className="button">Success</p>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="pagination">
              <span>&laquo; Previous</span>
              <span>Next &raquo;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalsList;
