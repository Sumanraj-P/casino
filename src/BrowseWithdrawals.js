import React from "react";
import "./BrowseWithdrawals.css";

function BrowseWithdrawals() {
  return (
    <div className="container">
      {/* Navigation */}
      <div className="navbar">
        
      </div>

      {/* Main content */}
      <div className="content">
        <h1>Browse Withdrawals</h1>

        {/* Search bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter the withdrawals details you are looking for"
          />
          <button className="search-btn">Search</button>
        </div>

        <div className="browse">
          {/* Browse Recharge link */}
          <div className="browse-recharge">
            <a href="#">Browse Recharge</a>
          </div>
          <hr />

          {/* Table */}
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Account</th>
                  <th>Bank</th>
                  <th>Account Number</th>
                  <th>Account Name</th>
                  <th>IFSC</th>
                  <th>UPI ID</th>
                  <th>Date and Time</th>
                  <th>Amount</th>
                  <th>Accept/Reject</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>123</td>
                  <td>
                    <a href="#">8441967 944</a>
                  </td>
                  <td>xxxx</td>
                  <td>55625</td>
                  <td>FRTYY</td>
                  <td>Rrtff</td>
                  <td>1234@ybl</td>
                  <td>2024-08-09 2:20:55 AM</td>
                  <td>100</td>
                  <td>
                    <button className="accept">&#10004;</button>
                    <button className="reject">&#128465;</button>
                  </td>
                </tr>
                <tr>
                  <td>123</td>
                  <td>
                    <a href="#">8441967 944</a>
                  </td>
                  <td>xxxx</td>
                  <td>55625</td>
                  <td>FRTYY</td>
                  <td>Rrtff</td>
                  <td>1234@ybl</td>
                  <td>2024-08-09 2:20:55 AM</td>
                  <td>100</td>
                  <td>
                    <button className="accept">&#10004;</button>
                    <button className="reject">&#128465;</button>
                  </td>
                </tr>
                <tr>
                  <td>123</td>
                  <td>
                    <a href="#">8441967 944</a>
                  </td>
                  <td>xxxx</td>
                  <td>55625</td>
                  <td>FRTYY</td>
                  <td>Rrtff</td>
                  <td>1234@ybl</td>
                  <td>2024-08-09 2:20:55 AM</td>
                  <td>100</td>
                  <td>
                    <button className="accept">&#10004;</button>
                    <button className="reject">&#128465;</button>
                  </td>
                </tr>
                <tr>
                  <td>123</td>
                  <td>
                    <a href="#">8441967 944</a>
                  </td>
                  <td>xxxx</td>
                  <td>55625</td>
                  <td>FRTYY</td>
                  <td>Rrtff</td>
                  <td>1234@ybl</td>
                  <td>2024-08-09 2:20:55 AM</td>
                  <td>100</td>
                  <td>
                    <button className="accept">&#10004;</button>
                    <button className="reject">&#128465;</button>
                  </td>
                </tr>
                <tr>
                  <td>123</td>
                  <td>
                    <a href="#">8441967 944</a>
                  </td>
                  <td>xxxx</td>
                  <td>55625</td>
                  <td>FRTYY</td>
                  <td>Rrtff</td>
                  <td>1234@ybl</td>
                  <td>2024-08-09 2:20:55 AM</td>
                  <td>100</td>
                  <td>
                    <button className="accept">&#10004;</button>
                    <button className="reject">&#128465;</button>
                  </td>
                </tr>
              <tr>
                  <td>123</td>
                  <td>
                    <a href="#">8441967 944</a>
                  </td>
                  <td>xxxx</td>
                  <td>55625</td>
                  <td>FRTYY</td>
                  <td>Rrtff</td>
                  <td>1234@ybl</td>
                  <td>2024-08-09 2:20:55 AM</td>
                  <td>100</td>
                  <td>
                    <button className="accept">&#10004;</button>
                    <button className="reject">&#128465;</button>
                  </td>
                </tr>                
                {/* Repeat rows as needed */}
              </tbody>
            </table>
            {/* Pagination */}
            <div className="pagination">
              <span>&laquo; Previous</span>
              <span>Next &raquo;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrowseWithdrawals;
