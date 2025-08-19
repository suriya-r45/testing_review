import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { User, LogOut } from 'lucide-react';
import { useAuth } from '@/lib/auth';
import { Currency, CURRENCY_NAMES } from '@/lib/currency';
import CartButton from '@/components/cart/cart-button';
import GoldRatesTicker from '@/components/gold-rates-ticker';
import AdvancedFilters from '@/components/advanced-filters';
import { ProductFilters } from '@shared/cart-schema';
import logoPath from '@assets/1000284180_1755240849891.jpg';

interface HeaderProps {
  selectedCurrency: Currency;
  onCurrencyChange: (currency: Currency) => void;
  filters?: ProductFilters;
  onFiltersChange?: (filters: ProductFilters) => void;
}

export default function Header({ selectedCurrency, onCurrencyChange, filters = {}, onFiltersChange }: HeaderProps) {
  const [location] = useLocation();
  const { user, logout, isAdmin } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <>
      <GoldRatesTicker />
      <header className="luxury-bg shadow-lg border-b border-gold-accent sticky top-0 z-50" data-testid="header-main">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2" data-testid="link-home">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold">
              <img 
                src={logoPath} 
                alt="Palaniappa Jewellers Logo" 
                className="w-full h-full object-cover"
              />
            </div>

              <div>
                <h1 className="text-xl font-display font-bold text-gradient">PALANIAPPA JEWELLERS</h1>
                <p className="text-xs muted-gold">Since 2025</p>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`transition-colors font-medium ${location === '/' ? 'gold-accent font-semibold' : 'muted-gold hover:gold-accent'}`} data-testid="nav-home">
              Home
            </Link>
            <a href="#products" className="muted-gold hover:gold-accent transition-colors font-medium" data-testid="nav-products">
              Products
            </a>
            <a href="#about" className="muted-gold hover:gold-accent transition-colors font-medium" data-testid="nav-about">
              About
            </a>
            <a href="#contact" className="muted-gold hover:gold-accent transition-colors font-medium" data-testid="nav-contact">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Advanced Filters - Only show on home page */}
            {location === '/' && onFiltersChange && (
              <AdvancedFilters 
                filters={filters}
                onFiltersChange={onFiltersChange}
              />
            )}
            
            {/* WhatsApp Icon */}
            <Button
              variant="ghost"
              size="sm"
              className="text-green-600 hover:bg-green-50 hover:text-green-700 transition-colors"
              onClick={() => {
                const message = `Hi! I'm interested in your jewelry collection. Could you please help me with more information?`;
                const whatsappUrl = `https://wa.me/97333444088?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              data-testid="button-whatsapp-global"
            >
              <svg 
                className="w-5 h-5" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
              </svg>
            </Button>
            <CartButton />
            <Select value={selectedCurrency} onValueChange={onCurrencyChange} data-testid="select-currency">
              <SelectTrigger className="w-32 flex items-center" data-testid="trigger-currency">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="INR" data-testid="option-inr">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 rounded-sm" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="8" fill="#FF9933"/>
                      <rect y="8" width="24" height="8" fill="#FFFFFF"/>
                      <rect y="16" width="24" height="8" fill="#138808"/>
                      <circle cx="12" cy="12" r="3" fill="#000080"/>
                    </svg>
                    <span>₹ INR</span>
                  </div>
                </SelectItem>
                <SelectItem value="BHD" data-testid="option-bhd">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 rounded-sm" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="12" fill="#FFFFFF"/>
                      <rect y="12" width="24" height="12" fill="#CE1126"/>
                      <path d="M0 0 L8 6 L0 12 V8 L4 6 L0 4 Z" fill="#CE1126"/>
                    </svg>
                    <span>BD BHD</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center space-x-2">
              {user ? (
                <div className="flex items-center space-x-2">
                  {isAdmin && (
                    <Link href="/admin">
                      <Button variant="outline" size="sm" className="premium-button" data-testid="button-admin-dashboard">
                        Dashboard
                      </Button>
                    </Link>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleLogout}
                    className="flex items-center space-x-1"
                    data-testid="button-logout"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>{user.name}</span>
                  </Button>
                </div>
              ) : (
                <Link href="/login">
                  <Button className="premium-button" data-testid="button-login">
                    <User className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}
