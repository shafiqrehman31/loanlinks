'use client';

import { useEffect } from 'react';

interface LoanSummaryData {
  loanAmount: string[];
  interestRate: string[];
  loanTerm: string[];
  fee: string[];
  monthlyPayment: string[];
  apr: string[];
  totalPayments: string[];
  totalCost: string[];
}

interface LoanSummaryTableProps {
  title?: string;
  subtitle?: string;
  description?: string;
  data?: LoanSummaryData;
  className?: string;
}

export default function LoanSummaryTable({
  title = "Detailed APR Cost Examples",
  subtitle = "Loan Summary",
  description = "Compare loan options with transparent pricing and see exactly what you'll pay over time. All examples include fees and interest for full cost disclosure.",
  data = {
    loanAmount: ["$1,000", "$2,000", "$2,500", "$5,000"],
    interestRate: ["24.00%", "19.00%", "16.00%", "13.00%"],
    loanTerm: ["12 months", "24 months", "36 months", "48 months"],
    fee: ["3.00%", "5.00%", "10.00%", "12.00%"],
    monthlyPayment: ["$94.56", "$100.82", "$87.89", "$131.67"],
    apr: ["29.82%", "24.12%", "22.93%", "18.23%"],
    totalPayments: ["$1,134.72", "$2,419.68", "$3,164.13", "$6,320.12"],
    totalCost: ["$164.72", "$519.68", "$914.13", "$1,920.12"]
  },
  className = ""
}: LoanSummaryTableProps) {
  
  const tableRows = [
    { label: "Loan Amount", values: data.loanAmount, highlight: false },
    { label: "Interest Rate", values: data.interestRate, highlight: false },
    { label: "Loan Term", values: data.loanTerm, highlight: false },
    { label: "Fee", values: data.fee, highlight: false },
    { label: "Monthly Payment", values: data.monthlyPayment, highlight: true },
    { label: "APR", values: data.apr, highlight: true },
    { label: "Total Payments", values: data.totalPayments, highlight: true },
    { label: "Total Cost", values: data.totalCost, highlight: true },
  ];

  return (
    <section className={`loan-summary section-space ${className}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="section-header">
              <div className="hadding">
                <span className="span-two">{subtitle}</span>
                <h2 className="position-relative fw-700">{title}</h2>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="table-data">
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <td>Loan Details</td>
                    {data.loanAmount.map((amount, index) => (
                      <td key={index}>{amount}</td>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, rowIndex) => (
                    <tr 
                      key={rowIndex} 
                      className={row.highlight ? 'highlight-row' : ''}
                    >
                      <td>{row.label}</td>
                      {row.values.map((value, colIndex) => (
                        <td key={colIndex}>{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="info-box">
              <div className="info-icon">
                ℹ️
              </div>
              <div className="info-content">
                <h4>Understanding Your Loan Costs</h4>
                <p>APR (Annual Percentage Rate) includes both interest and fees to give you a complete picture of loan costs. Lower APR generally means lower total cost over the life of the loan. These examples are for illustrative purposes only. Actual rates and terms may vary based on creditworthiness.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .loan-summary {
          background: #f8fafc;
        }

        .hadding {
          text-align: center;
          margin-bottom: 60px;
        }

        .span-two {
          display: inline-block;
          color: #E45551;
          font-size: 16px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 15px;
          padding: 5px 15px;
          background: rgba(228, 85, 81, 0.1);
          border-radius: 20px;
        }

        .hadding h2 {
          font-size: 42px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .hadding p {
          font-size: 18px;
          color: #64748b;
          line-height: 1.6;
          max-width: 700px;
          margin: 0 auto;
        }

        .table-data {
          width: 100%;
        }

        .table-wrapper {
          overflow-x: auto;
          background: white;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          margin-bottom: 40px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          min-width: 800px;
        }

        table thead {
          background: linear-gradient(135deg, #E45551 0%, #ff7a75 100%);
        }

        table thead tr td {
          color: white;
          font-weight: 600;
          padding: 25px 20px;
          font-size: 18px;
          text-align: center;
          border: none;
        }

        table thead tr td:first-child {
          border-radius: 15px 0 0 0;
        }

        table thead tr td:last-child {
          border-radius: 0 15px 0 0;
        }

        table tbody tr {
          transition: all 0.3s ease;
        }

        table tbody tr:hover {
          background: #f8fafc;
          transform: translateY(-2px);
        }

        table tbody tr:nth-child(even) {
          background: #f8fafc;
        }

        table tbody tr td {
          padding: 20px;
          text-align: center;
          border-bottom: 1px solid #e2e8f0;
          font-size: 16px;
          color: #475569;
        }

        table tbody tr:last-child td {
          border-bottom: none;
        }

        table tbody tr td:first-child {
          font-weight: 600;
          color: #1e293b;
          text-align: left;
          background: #f1f5f9;
          width: 250px;
        }

        table tbody tr.highlight-row td {
          font-weight: 700;
          color: #E45551;
          font-size: 18px;
        }

        /* Info Box */
        .info-box {
          background: #f0f9ff;
          border: 2px solid #bae6fd;
          border-radius: 15px;
          padding: 30px;
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .info-icon {
          font-size: 32px;
          color: #0ea5e9;
          flex-shrink: 0;
        }

        .info-content h4 {
          margin: 0 0 15px 0;
          color: #0369a1;
          font-size: 20px;
          font-weight: 600;
        }

        .info-content p {
          margin: 0;
          color: #0c4a6e;
          line-height: 1.6;
          font-size: 16px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hadding h2 {
            font-size: 32px;
          }
          
          .hadding p {
            font-size: 16px;
          }
          
          table thead tr td {
            padding: 15px 10px;
            font-size: 16px;
          }
          
          table tbody tr td {
            padding: 15px 10px;
            font-size: 14px;
          }
          
          .info-box {
            flex-direction: column;
            text-align: center;
            padding: 20px;
          }
          
          .info-icon {
            margin: 0 auto;
          }
        }

      

        /* Section Spacing */
        .section-space {
          padding: 100px 0;
          position: relative;
        }

        @media (max-width: 768px) {
          .section-space {
            padding: 60px 0;
          }
        }

        /* Row & Columns */
        .row {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -15px;
        }

        .col-lg-12 {
          flex: 0 0 100%;
          max-width: 100%;
          padding: 0 15px;
        }
      `}</style>
    </section>
  );
}