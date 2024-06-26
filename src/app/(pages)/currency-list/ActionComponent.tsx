import React, { useState } from 'react';
import { Button } from '@/app/components/ui/shadcn/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/app/components/ui/shadcn/dropdown-menu';
import { formatPrice } from '@/lib/utils';
import { MoreHorizontal } from 'lucide-react';
import { CurrencyFromDS } from '@/lib/types/exchangeTypes';

interface ActionProps {
  currency: CurrencyFromDS;
}

const ActionComponent: React.FC<ActionProps> = ({ currency }) => {
  const [showHistory, setShowHistory] = useState(false); // State to toggle history display

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' className='h-8 w-8 p-0'>
            <span className='sr-only'>Open menu</span>
            <MoreHorizontal className='h-4 w-4' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => navigator.clipboard.writeText(currency.name)}>
            Copy Currency Name
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={toggleHistory}>
            Watch History
          </DropdownMenuItem>
          {/* Additional actions */}
          <DropdownMenuItem>Buy</DropdownMenuItem>
          <DropdownMenuItem>Sell</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* History section */}
      {showHistory && (
        <div className='mt-2 p-2 border border-gray-200 rounded'>
          <h3 className='text-lg font-semibold mb-2'>Price History</h3>
          <ul>
            <li>24h ago: {formatPrice(currency['24h_ago'])}</li>
            <li>7d ago: {formatPrice(currency['7d_ago'])}</li>
            <li>30d ago: {formatPrice(currency['30d_ago'])}</li>
            <li>1y ago: {formatPrice(currency['1y_ago'])}</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default ActionComponent;
