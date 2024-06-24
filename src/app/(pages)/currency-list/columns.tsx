'use client'

import { ColumnDef } from '@tanstack/react-table'

import { MoreHorizontal, ArrowUpDown } from 'lucide-react'

import { Button } from '@/app/components/ui/shadcn/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/app/components/ui/shadcn/dropdown-menu'

interface Currency {
  name: string;
  last: string;
  buy: string;
  sell: string;
  trading_activity: number;
  typical_hold_time: number;
  market_cap: string;
  rank: number;
  volume: string;
  circulating_supply: string;
  all_time_high: string;
  tradeable: boolean;
  low: string;
  high: string;
  "24h_ago": string;
  "7d_ago": string;
  "30d_ago": string;
  "1y_ago": string;
}

export const columns: ColumnDef<Currency>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Name
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      )
    }
  },
  {
    accessorKey: 'last',
    header: 'Last'
  },
  {
    accessorKey: 'buy',
    header: 'Buy',
    cell: ({ row }) => {
      const buyValue = row.getValue('buy')
      return <div className='font-medium'>{}</div>
    }
  },
  {
    accessorKey: 'sell',
    header: 'Sell'
  },
  {
    accessorKey: 'market_cap',
    header: 'Market Cap'
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const currency = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(currency.name)}
            >
              Copy user ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]