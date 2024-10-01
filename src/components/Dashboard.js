import React, { useMemo } from 'react';
import { useTable, usePagination } from 'react-table';

const Dashboard = ({ activeTab }) => {
  // Sample data for different tabs
  const data = useMemo(() => {
    switch (activeTab) {
      case 'Sales':
        return [
          { product: 'Widget A', sales: 100, revenue: 1000 },
          { product: 'Widget B', sales: 150, revenue: 1500 },
          { product: 'Widget C', sales: 200, revenue: 2000 },
          { product: 'Widget D', sales: 250, revenue: 2500 },
          { product: 'Widget E', sales: 300, revenue: 3000 },
        ];
      case 'Operational':
        return [
          { operation: 'Manufacturing', status: 'On Schedule' },
          { operation: 'Shipping', status: 'Delayed' },
          { operation: 'Procurement', status: 'On Schedule' },
        ];
      case 'Customer Satisfaction':
        return [
          { customer: 'John Doe', satisfaction: 4 },
          { customer: 'Jane Smith', satisfaction: 5 },
        ];
      case 'HR':
        return [
          { employee: 'Alice', role: 'Engineer' },
          { employee: 'Bob', role: 'Designer' },
        ];
      case 'Strategic Reports':
        return [
          { strategy: 'Market Expansion', progress: '50%' },
          { strategy: 'Cost Reduction', progress: '70%' },
        ];
      default:
        return [];
    }
  }, [activeTab]);

  // Define columns based on activeTab
  const columns = useMemo(() => {
    switch (activeTab) {
      case 'Sales':
        return [
          { Header: 'Product', accessor: 'product' },
          { Header: 'Sales', accessor: 'sales' },
          { Header: 'Revenue', accessor: 'revenue' },
        ];
      case 'Operational':
        return [
          { Header: 'Operation', accessor: 'operation' },
          { Header: 'Status', accessor: 'status' },
        ];
      case 'Customer Satisfaction':
        return [
          { Header: 'Customer', accessor: 'customer' },
          { Header: 'Satisfaction', accessor: 'satisfaction' },
        ];
      case 'HR':
        return [
          { Header: 'Employee', accessor: 'employee' },
          { Header: 'Role', accessor: 'role' },
        ];
      case 'Strategic Reports':
        return [
          { Header: 'Strategy', accessor: 'strategy' },
          { Header: 'Progress', accessor: 'progress' },
        ];
      default:
        return [];
    }
  }, [activeTab]);

  // React Table with Pagination
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page, // Instead of rows, use page for pagination
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 2 }, // Set page size initially
    },
    usePagination
  );

  return (
    <div className="flex-1 p-4 overflow-auto">
      <h1 className="text-2xl font-bold mb-4">{activeTab} Dashboard</h1>
      
      <div className="bg-white shadow-md rounded">
        <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody
            {...getTableBodyProps()}
            className="bg-white divide-y divide-gray-200"
          >
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                    >
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="py-3 flex items-center justify-between">
        <div className="flex-1 flex justify-between sm:hidden">
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Previous
          </button>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Next
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Page{' '}
              <span className="font-medium">
                {pageIndex + 1} of {pageOptions.length}
              </span>
            </p>
          </div>
          <div>
            <button
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
              className="bg-blue-500 text-white px-4 py-2 rounded mx-1"
            >
              First
            </button>
            <button
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
              className="bg-blue-500 text-white px-4 py-2 rounded mx-1"
            >
              Previous
            </button>
            <button
              onClick={() => nextPage()}
              disabled={!canNextPage}
              className="bg-blue-500 text-white px-4 py-2 rounded mx-1"
            >
              Next
            </button>
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
              className="bg-blue-500 text-white px-4 py-2 rounded mx-1"
            >
              Last
            </button>
          </div>
          <div>
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            >
              {[2, 5, 10].map((size) => (
                <option key={size} value={size}>
                  Show {size}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
