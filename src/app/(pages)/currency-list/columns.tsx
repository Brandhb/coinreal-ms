'use client'

import { ColumnDef } from '@tanstack/react-table'

import { ArrowUpDown } from 'lucide-react'

import { Button } from '@/app/components/ui/shadcn/button'
import { formatPrice } from '@/lib/utils'
import { CurrencyFromDS } from '@/lib/types/exchangeTypes'
import ActionComponent from './ActionComponent'


export const columns: ColumnDef<CurrencyFromDS>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <Button
        variant='ghost'
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Cryptocurrencies
        <ArrowUpDown className='ml-2 h-4 w-4' />
      </Button>
    ),
    cell: ({ row }) => {
      const currency = row.original;
      return (
        <div className='font-medium'>
          {currency.name} ({currency.token})
        </div>
      );
    }
  },
  {
    accessorKey: 'last',
    header: 'Last',
    cell: ({ row }) => {
      const lastValue: string = row.getValue('last')
      const formatterPrice = formatPrice(lastValue) 
      return <div className='font-medium'>{formatterPrice}</div>
    }
  },
  {
    accessorKey: 'buy',
    header: 'Buy',
    cell: ({ row }) => {
      const buyValue: string = row.getValue('buy')
      const formatterPrice = formatPrice(buyValue) 
      return <div className='font-medium'>{formatterPrice}</div>
    }
  },
  {
    accessorKey: 'sell',
    header: 'Sell',
    cell: ({ row }) => {
      const sellValue: string = row.getValue('sell')
      const formatterPrice = formatPrice(sellValue) 
      return <div className='font-medium'>{formatterPrice}</div>
    }
  },
  {
    accessorKey: 'market_cap',
    header: 'Market Cap',
    cell: ({ row }) => {
      const marketCapValue: string = row.getValue('market_cap')
      const formatterPrice = formatPrice(marketCapValue) 
      return <div className='font-medium'>{formatterPrice}</div>
    }
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const currency = row.original;


      return (
        <>
          <ActionComponent currency={currency} />
        </>
      );
    }
  }
]