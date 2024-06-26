import { useState } from 'react'
import { Button } from '@/app/components/ui/shadcn/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/app/components/ui/shadcn/dropdown-menu'
import { CurrencyFromDS } from '@/lib/types/exchangeTypes'
import { formatPrice } from '@/lib/utils'
import { ChevronDown, ChevronRight, Search } from 'lucide-react' // Assuming you have imported Search from lucide-react
import { Skeleton } from './shadcn/skeleton'


interface MobileFriendlyTableProps {
  data: CurrencyFromDS[]
  loading: boolean
}

const itemsPerPage = 10; // Define the number of items per page

export const MobileFriendlyTable: React.FC<MobileFriendlyTableProps> = ({ data, loading }) => {
  const [expandedCurrency, setExpandedCurrency] = useState<string | null>(null)
  const [historyVisible, setHistoryVisible] = useState<{ [key: string]: boolean }>({})
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')

  const toggleExpand = (token: string) => {
    setExpandedCurrency(expandedCurrency === token ? null : token)
  }

  const toggleHistory = (token: string) => {
    setHistoryVisible(prev => ({
      ...prev,
      [token]: !prev[token]
    }))
  }

  // Filtered and paginated data based on searchQuery
  const filteredData = data.filter(currency =>
    currency.name.toLowerCase().includes(searchQuery.toLowerCase())
  )
  const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)

  return (
    <div className="space-y-4 p-2">
      {/* Search Input */}
      <div className="flex items-center py-4">
        <Search className="mr-2 h-5 w-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search by currency name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border rounded-md py-2 px-4 w-full"
        />
      </div>

      {/* Currency Items */}
      {loading ? (
        // Skeleton Loading Placeholder
        Array.from({ length: itemsPerPage }).map((_, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-sm animate-pulse">
            <Skeleton height={20} width="80%" />
          </div>
        ))
      ) : (
        paginatedData.map(currency => (
          <div 
            key={currency.token} 
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div 
              onClick={() => toggleExpand(currency.token || '')} 
              className="flex justify-between items-center cursor-pointer"
            >
              <div className="font-medium text-lg">{currency.name} ({currency.token})</div>
              <div className="text-gray-500">
                {expandedCurrency === currency.token ? <ChevronDown /> : <ChevronRight />}
              </div>
            </div>
            {expandedCurrency === currency.token && (
              <div className="mt-2 space-y-2 text-sm text-gray-700">
                <div>Last: {formatPrice(currency.last)}</div>
                <div>Buy: {formatPrice(currency.buy)}</div>
                <div>Sell: {formatPrice(currency.sell)}</div>
                <div>Market Cap: {formatPrice(currency.market_cap)}</div>
                <div>Rank: {currency.rank}</div>
                <div className="mt-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">Actions</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className='mx-4'>
                      <DropdownMenuItem onClick={() => alert(`Buying ${currency.name}`)}>Buy</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => alert(`Selling ${currency.name}`)}>Sell</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => toggleHistory(currency.token || '')}>
                        {historyVisible[currency.token] ? 'Hide History' : 'Watch History'}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                {historyVisible[currency.token] && (
                  <div className="mt-2 space-y-1">
                    <div>24h ago: {formatPrice(currency["24h_ago"])}</div>
                    <div>7d ago: {formatPrice(currency["7d_ago"])}</div>
                    <div>30d ago: {formatPrice(currency["30d_ago"])}</div>
                    <div>1y ago: {formatPrice(currency["1y_ago"])}</div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))
      )}

      {/* Pagination Controls */}
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant='outline'
          size='sm'
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Button
          variant='outline'
          size='sm'
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
