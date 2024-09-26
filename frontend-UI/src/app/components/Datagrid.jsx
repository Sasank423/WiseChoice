'use client';

import * as React from 'react';
import Image from 'next/image';
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ArrowUpDown, ChevronDown, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const chartData = [
  {
    _id: '66bdedf05daf11898bed8a53',
    review: 'worst',
    rating: 'positive',
  },
  {
    _id: '66bd8e7c96bc9823d6f33533',
    review: 'wonderful product',
    rating: 'positive',
  },
  {
    _id: '66bcecc9fd7c960777be908a',
    review: 'wonderful product',
    rating: 'positive',
  },
  {
    _id: '66bcec80fd7c960777be9088',
    review: 'wonderful product',
    rating: 'positive',
  },
  {
    _id: '66bcebdafd7c960777be9085',
    review: 'wonderful product',
    rating: 'positive',
  },
  {
    _id: '66bcca3cec046a99d8c681af',
    review: 'wonderful product',
    rating: 'positive',
  },
  {
    _id: '667e3051abcdfed5b81afede',
    review: 'wonderful product',
    rating: 'positive',
  },
  {
    _id: '667e304fabcdfed5b81afedc',
    review: 'wonderful product',
    rating: 'positive',
  },
  {
    _id: '667bdad9cb54b714a7c2e493',
    review: 'wonderful product',
    rating: 'positive',
  },
  {
    _id: '667bd9eccb54b714a7c2e481',
    review: 'wonderful product',
    rating: 'positive',
  },
  {
    _id: '6670403bd68949e4f30928f1',
    review: 'wonderful product',
    rating: 'positive',
  },
  {
    _id: '66703ff9d68949e4f30928ef',
    review: 'wonderful product',
    rating: 'positive',
  },
  {
    _id: '666f1a4a979e38bcfef880c6',
    review: 'wonderful product',
    rating: 'positive',
  },
  {
    _id: '666b0258c2f7b7a502159a6a',
    review: 'wonderful product',
    rating: 'positive',
  },
  {
    _id: '666aad01a0e20d627c91d562',
    review: 'wonderful product',
    rating: 'positive',
  },
  {
    _id: '66686c10c54774f23177a904',
    review: 'wonderful product',
    rating: 'positive',
  },
  {
    _id: '666854f5e34bf79d6bc02b77',
    reviewL: 'wonderful product',
    rating: 'positive',
  },
  {
    _id: '66685358e34bf79d6bc02b75',
    review: 'wonderful product',
    rating: 'positive',
  },
  {
    _id: '6668531ee34bf79d6bc02b70',
    review: 'wonderful product',
    rating: 'positive',
  },
  {
    _id: '66684ec5b6de2644efe9eca9',
    review: 'wonderful product',
    rating: 'positive',
  },
];

export const columns = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'review',
    header: ()=> <h1 className='font-bold'>Reviews</h1>,
    cell: ({ row }) => <div className="">{row.getValue('review').slice(0,60)}...</div>,
  },
  {
    accessorKey: 'rating',
    header: ()=> <h1 className='font-bold'>Rating</h1>,
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('rating')}</div>
    ),
  },
];

const Datagrid = ({data}) => {
  // const [data, setData] = React.useState([
  //   {
  //     _id: '66bdedf05daf11898bed8a53',
  //     review: 'worst',
  //     rating: 'positive',
  //   },
  //   {
  //     _id: '66bd8e7c96bc9823d6f33533',
  //     review: 'wonderful product',
  //     rating: 'positive',
  //   },
  //   {
  //     _id: '66bcecc9fd7c960777be908a',
  //     review: 'wonderful product',
  //     rating: 'positive',
  //   },
  //   {
  //     _id: '66bcec80fd7c960777be9088',
  //     review: 'wonderful product',
  //     rating: 'positive',
  //   },
  // ]);
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);

  //   React.useEffect(() => {
  //     setIsLoading(true);
  //     const getData = async () => {
  //       const res = await fetch('/api/cars', {
  //         method: 'GET',
  //       });
  //       let response = await res.json();
  //       console.log(res);
  //       if (res.ok) {
  //         setData(response.data);
  //       }
  //       setIsLoading(false);
  //     };
  //     getData();
  //   }, []);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });
  //   console.log(table.getAllColumns());

  return (
    <div className="w-full h-full overflow-hidden bg-white dark:bg-[#1b1b1b] text-black dark:text-white">
      <div className="flex items-center py-4">
        {/* <Input
          placeholder="Filter Clients..."
          value={table.getColumn('clientName')?.getFilterValue() ?? ''}
          onChange={(event) =>
            table.getColumn('clientName')?.setFilterValue(event.target.value)
          }
          className="max-w-sm bg-white"
        /> */}
<h1 className='text-2xl font-medium text-center w-full'>Extracted Reviews</h1>
        {/* <Input
          placeholder="Filter client names or emails..."
          value={filterValue}
          onChange={(event) => {
            const value = event.target.value;
            setFilterValue(value); // Assuming you have a state to store the filter value
            table.getColumn('clientName')?.setFilterValue(value);
            table.getColumn('email')?.setFilterValue(value);
          }}
          className="max-w-sm"
        /> */}
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu> */}
      </div>
      <div className="h-full rounded-md border dark:border-gray-600 overflow-scroll max-h-[70vh]">
        <Table className="dark:border-gray-700 h-full">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="dark:border-gray-600">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="max-h-64 overflow-y-auto">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  className="dark:border-gray-700"
                  key={row._id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  {/* No results. */}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of {}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div> */}
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Datagrid;
