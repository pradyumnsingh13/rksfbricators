"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Menu, Phone } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useRouter } from "next/navigation"

function SearchBar() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [searchResults, setSearchResults] = React.useState<{ id: string; name: string; type: string }[]>([])
  const [showResults, setShowResults] = React.useState(false)

  const allItems = [
    // Pharmaceutical Equipment
    { id: "air-shower", name: "Air Shower", type: "pharmaceutical" },
    { id: "mist-shower", name: "Mist Shower", type: "pharmaceutical" },
    { id: "dedusting-tunnel", name: "Dedusting Tunnel", type: "pharmaceutical" },
    { id: "vertical-laf", name: "Vertical LAF", type: "pharmaceutical" },
    { id: "laf-workbench", name: "LAF Workbench", type: "pharmaceutical" },
    { id: "mobile-laf-trolley", name: "Mobile LAF Trolley", type: "pharmaceutical" },
    { id: "sampling-dispensing-booth", name: "Sampling & Dispensing Booth", type: "pharmaceutical" },
    { id: "static-dynamic-passbox", name: "Static & Dynamic Passbox", type: "pharmaceutical" },
    { id: "biosafety-tank", name: "Biosafety Tank", type: "pharmaceutical" },
    { id: "pressure-vessel", name: "Pressure Vessel", type: "pharmaceutical" },
    { id: "conveyor", name: "Conveyor Systems", type: "pharmaceutical" },
    { id: "mixer", name: "Industrial Mixers", type: "pharmaceutical" },
    { id: "blender", name: "Pharmaceutical Blenders", type: "pharmaceutical" },
    { id: "autoclave", name: "Pharmaceutical Autoclave", type: "pharmaceutical" },

    // Furniture Items
    { id: "crossover-bench", name: "Crossover Bench", type: "furniture" },
    { id: "ss-locker", name: "SS Locker", type: "furniture" },
    { id: "ms-locker", name: "MS Locker", type: "furniture" },
    { id: "apron-locker", name: "Apron Locker", type: "furniture" },
    { id: "book-almirah", name: "Book Almirah", type: "furniture" },
    { id: "mopping-trolley", name: "Mopping Trolley", type: "furniture" },
    { id: "computer-table", name: "Computer Table", type: "furniture" },
    { id: "tables-chairs", name: "Tables & Chairs", type: "furniture" },
    { id: "powder-sampler", name: "Powder Sampler", type: "furniture" },
    { id: "trolleys-carts", name: "Trolleys & Carts", type: "furniture" },
    { id: "step-ladder", name: "Step Ladder", type: "furniture" },
    { id: "sink-table", name: "Sink Table", type: "furniture" },
    { id: "storage-solutions", name: "Storage Solutions", type: "furniture" },
    { id: "lab-accessories", name: "Laboratory Accessories", type: "furniture" },
    { id: "almirah", name: "Almirah", type: "furniture" },
    { id: "cagetrolley", name: "Cage Trolley", type: "furniture" },
    { id: "chair", name: "Chair", type: "furniture" },
    { id: "diepunchcabinet", name: "Diepunch Cabinet", type: "furniture" },
    { id: "dustbin", name: "Dustbin", type: "furniture" },
    { id: "IPC", name: "IPC", type: "furniture" },
    { id: "linentrolley", name: "Linen Trolley", type: "furniture" },
    { id: "mug", name: "Mug", type: "furniture" },
    { id: "pallet", name: "Pallet", type: "furniture" },
    { id: "petristand", name: "Petri Stand", type: "furniture" },
    { id: "platformtrolley", name: "Platform Trolley", type: "furniture" },
    { id: "scoop", name: "Scoop", type: "furniture" },
    { id: "sopstand", name: "SOP Stand", type: "furniture" },
    { id: "spatulla", name: "Spatulla", type: "furniture" },
    { id: "ss&mspallettruck", name: "SS & MS Pallet Truck", type: "furniture" },
    { id: "sscontainer", name: "SS Container", type: "furniture" },
    { id: "stool", name: "Stool", type: "furniture" },
    { id: "table", name: "Table", type: "furniture" },
    { id: "toolbox", name: "Tool Box", type: "furniture" },
    { id: "transportationtrolley", name: "Transportation Trolley", type: "furniture" },
    { id: "tray", name: "Tray", type: "furniture" },
    { id: "ampoulestray", name: "Ampoules Tray", type: "furniture" },
    { id: "wallguard", name: "Wall Guard", type: "furniture" },
    { id: "stirir", name: "GMP Model Stirir", type: "furniture" },



    // Tanks
    { id: "storage-tank", name: "Storage Tank", type: "tank" },
    { id: "manufacturing-tank-1", name: "Manufacturing Tank 1", type: "tank" },
    { id: "manufacturing-tank-2", name: "Manufacturing Tank 2", type: "tank" },
    { id: "manufacturing-tank-3", name: "Manufacturing Tank 3", type: "tank" },
    { id: "manufacturing-tank-4", name: "Manufacturing Tank 4", type: "tank" },
    { id: "soft-gelating-tank", name: "Soft Gelating Tank", type: "tank" },
    { id: "wfi-jacketed-tank", name: "WFI Jacketed Tank", type: "tank" },
    { id: "multimill", name: "Multimill", type: "tank" },
    { id: "hot-air-dryer", name: "Hot Air Dryer", type: "tank" },
  ]

  React.useEffect(() => {
    if (searchQuery.length > 1) {
      const filtered = allItems.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
      setSearchResults(filtered)
      setShowResults(true)
    } else {
      setSearchResults([])
      setShowResults(false)
    }
  }, [searchQuery])

  const handleClickOutside = React.useCallback(() => {
    setShowResults(false)
  }, [])

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [handleClickOutside])

  const handleSearchClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (searchQuery.length > 1) {
      setShowResults(true)
    }
  }

  const handleResultClick = (id: string) => {
    setShowResults(false)
    setSearchQuery("")
    // Scroll to the element
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative" onClick={(e) => e.stopPropagation()}>
      <div className="flex items-center border rounded-md px-2 py-1 bg-white">
        <input
          type="text"
          placeholder="Search..."
          className="outline-none border-none text-xs w-24 md:w-28"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onClick={handleSearchClick}
        />
        <Button variant="ghost" size="icon" className="h-6 w-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </Button>
      </div>

      {showResults && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white shadow-lg rounded-md z-50 max-h-60 overflow-y-auto">
          {searchResults.map((item) => (
            <div
              key={item.id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              onClick={() => handleResultClick(item.id)}
            >
              <div className="font-medium">{item.name}</div>
              <div className="text-xs text-gray-500 capitalize">{item.type} Equipment</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

const products = [
  {
    title: "Steel Structures",
    href: "#products-steel-structures",
    description: "Custom steel structures for industrial and commercial applications",
  },
  {
    title: "Lab Furnitures",
    href: "#products-lab-furnitures",
    description: "Durable and ergonomic solutions for laboratory environments",
  },
  {
    title: "Orbital Welding Pipeline",
    href: "#products-orbital-welding",
    description: "Precision welding for high-purity piping systems",
  },
  {
    title: "MS Racking System Warehouse",
    href: "#products-ms-racking",
    description: "High-quality stainless steel fabrication for specialized needs",
  },
]

const tanks = [
  {
    title: "Storage Tank",
    href: "#storage-tank",
    description: "High-capacity storage solutions for pharmaceutical liquids",
  },
  {
    title: "Manufacturing Tank 1",
    href: "#manufacturing-tank-1",
    description: "Primary processing tank for pharmaceutical manufacturing",
  },
  {
    title: "Manufacturing Tank 2",
    href: "#manufacturing-tank-2",
    description: "Secondary processing tank for pharmaceutical manufacturing",
  },
  {
    title: "Manufacturing Tank 3",
    href: "#manufacturing-tank-3",
    description: "Tertiary processing tank for pharmaceutical manufacturing",
  },
  {
    title: "Manufacturing Tank 4",
    href: "#manufacturing-tank-4",
    description: "Quaternary processing tank for pharmaceutical manufacturing",
  },
  {
    title: "Soft Gelating Tank",
    href: "#soft-gelating-tank",
    description: "Specialized tank for soft gelatin capsule production",
  },
  {
    title: "WFI Jacketed Tank",
    href: "#wfi-jacketed-tank",
    description: "Water for injection jacketed tank for sterile applications",
  },
  {
    title: "Multimill",
    href: "#multimill",
    description: "Multi-purpose milling equipment for pharmaceutical processing",
  },
  {
    title: "Hot Air Dryer",
    href: "#hot-air-dryer",
    description: "Efficient drying solution for pharmaceutical products",
  },
]

const compactMenuTriggerStyle = () => {
  return cn(navigationMenuTriggerStyle(), "px-1.5 py-1 text-xs")
}

export default function MainNav() {
  const router = useRouter()

  const handleProductClick = (href: string) => {
    // Close any open menus
    document.body.click()

    // If it's a hash link, handle it manually for smooth scrolling
    if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      } else {
        // If the element doesn't exist on the current page, navigate to the products page
        router.push(`/${href}`)
      }
    } else {
      // For regular links
      router.push(href)
    }
  }

  return (
    <div className="flex justify-between items-center w-full px-2 md:px-4">
      <div className="hidden md:flex">
        <NavigationMenu className="text-xs">
          <NavigationMenuList className="flex items-center gap-0.5">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={compactMenuTriggerStyle()}>Home</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={compactMenuTriggerStyle()}>About</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-xs px-1.5 py-1">Pharma Equipments</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[280px] gap-1 p-2 md:w-[400px] md:grid-cols-2 lg:w-[450px]">
                  <ListItem title="Air Shower" href="#air-shower">
                    High-efficiency HEPA filtration system
                  </ListItem>
                  <ListItem title="Mist Shower" href="#mist-shower">
                    Uniform mist distribution system
                  </ListItem>
                  <ListItem title="Dedusting Tunnel" href="#dedusting-tunnel">
                    Multi-stage cleaning process
                  </ListItem>
                  <ListItem title="Vertical LAF" href="#vertical-laf">
                    Vertical unidirectional airflow
                  </ListItem>
                  <ListItem title="LAF Workbench" href="#laf-workbench">
                    Horizontal laminar airflow
                  </ListItem>
                  <ListItem title="Mobile LAF Trolley" href="#mobile-laf-trolley">
                    Portable design with lockable wheels
                  </ListItem>
                  <ListItem title="Sampling & Dispensing Booth" href="#sampling-dispensing-booth">
                    Downflow and exhaust air systems
                  </ListItem>
                  <ListItem title="Static & Dynamic Passbox" href="#static-dynamic-passbox">
                    Interlocking door mechanism
                  </ListItem>
                  <ListItem title="Biosafety Tank" href="#biosafety-tank">
                    Hermetically sealed design
                  </ListItem>
                  <ListItem title="Pressure Vessel" href="#pressure-vessel">
                    ASME certified construction
                  </ListItem>
                  <ListItem title="Conveyor Systems" href="#conveyor">
                    Clean room compatible design
                  </ListItem>
                  <ListItem title="Industrial Mixers" href="#mixer">
                    Multiple impeller options
                  </ListItem>
                  <ListItem title="Pharmaceutical Blenders" href="#blender">
                    GMP compliant design
                  </ListItem>
                  <ListItem title="Pharmaceutical Autoclave" href="#autoclave">
                    Validation-ready design
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-xs px-1.5 py-1">Furniture Items</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[280px] gap-1 p-2 md:w-[400px] md:grid-cols-2 lg:w-[450px]">
                  <ListItem title="Crossover Bench" href="#crossover-bench">
                    Clean room compatible design
                  </ListItem>
                  <ListItem title="SS Locker" href="#ss-locker">
                    Stainless steel construction
                  </ListItem>
                  <ListItem title="MS Locker" href="#ms-locker">
                    Mild steel with powder coating
                  </ListItem>
                  <ListItem title="Apron Locker" href="#apron-locker">
                    Specialized storage for clean room apparel
                  </ListItem>
                  <ListItem title="Book Almirah" href="#book-almirah">
                    Document storage solution
                  </ListItem>
                  <ListItem title="Mopping Trolley" href="#mopping-trolley">
                    Mobile cleaning solution
                  </ListItem>
                  <ListItem title="Computer Table" href="#computer-table">
                    Ergonomic workstation design
                  </ListItem>

                  <ListItem title="Powder Sampler" href="#powder-sampler">
                    Precision sampling equipment
                  </ListItem>

                  <ListItem title="Step Ladders" href="#step-ladder">
                    Safe access solutions
                  </ListItem>
                  <ListItem title="Sink Tables" href="#sink-table">
                    Washing and cleaning stations
                  </ListItem>
                  <ListItem title="Storage Solutions" href="#storage-solutions">
                    Containers, cabinets and pallets
                  </ListItem>

                  <ListItem title="Cage Trolley" href="#cagetrolley">
                    Secure material transport
                  </ListItem>
                  <ListItem title="Die Punch Cabinet" href="#diepunchcabinet">
                    Organized tool storage
                  </ListItem>
                  <ListItem title="IPC" href="#IPC">
                    Intermediate bulk handling
                  </ListItem>
                  <ListItem title="Petri Stand" href="#petristand">
                    Stable lab sample support
                  </ListItem>
                  <ListItem title="Platform Trolley" href="#platformtrolley">
                    Heavy-duty load transport
                  </ListItem>
                  <ListItem title="SOP Stand" href="#sopstand">
                    Document display holder
                  </ListItem>

                  <ListItem title="SS & MS Pallet Truck" href="#ss&mspallettruck">
                    Efficient material handling
                  </ListItem>
                  <ListItem title="Tool Box" href="#toolbox">
                    Compact tool storage
                  </ListItem>
                  <ListItem title="Ampoules Tray" href="#ampoulestray">
                  Secure ampoule handling
                  </ListItem>
                  <ListItem title="Wall Guard" href="#wallguard">
                  Protective wall barrier
                  </ListItem>
                  <ListItem title="GMP Model Stirir" href="#stirir">
                  Hygienic precision mixing
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-xs px-1.5 py-1">Tanks</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[280px] gap-1 p-2 md:w-[400px] md:grid-cols-2 lg:w-[450px]">
                  {tanks.map((tank) => (
                    <li key={tank.title}>
                      <button
                        onClick={() => handleProductClick(tank.href)}
                        className="block w-full text-left select-none space-y-0 rounded-md p-1.5 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-xs font-medium leading-none">{tank.title}</div>
                        <p className="line-clamp-1 text-xs leading-snug text-muted-foreground">{tank.description}</p>
                      </button>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-xs px-1.5 py-1">Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[280px] gap-1 p-2 md:w-[400px] md:grid-cols-2 lg:w-[450px]">
                  {products.map((product) => (
                    <li key={product.title}>
                      <button
                        onClick={() => handleProductClick(product.href)}
                        className="block w-full text-left select-none space-y-0 rounded-md p-1.5 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-xs font-medium leading-none">{product.title}</div>
                        <p className="line-clamp-1 text-xs leading-snug text-muted-foreground">{product.description}</p>
                      </button>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={compactMenuTriggerStyle()}>Contact</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#clients" legacyBehavior passHref>
                <NavigationMenuLink className={compactMenuTriggerStyle()}>Clients</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="overflow-y-auto">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/" className="text-lg font-medium">
                Home
              </Link>
              <Link href="#about" className="text-lg font-medium">
                About
              </Link>
              <div className="border-t pt-2">
                <p className="font-semibold mb-2">Pharmaceuticals Equipments</p>
                <div className="grid grid-cols-2 gap-1 text-sm pl-2">
                  <Link href="#air-shower">Air Shower</Link>
                  <Link href="#mist-shower">Mist Shower</Link>
                  <Link href="#vertical-laf">Vertical LAF</Link>
                  <Link href="#autoclave">Autoclave</Link>
                  <Link href="#biosafety-tank">Biosafety Tank</Link>
                  <Link href="#pressure-vessel">Pressure Vessel</Link>
                  <Link href="#conveyor">Conveyor</Link>
                  <Link href="#mixer">Mixer</Link>
                  <Link href="#blender">Blender</Link>
                </div>
              </div>
              <div className="border-t pt-2">
                <p className="font-semibold mb-2">Furniture Items</p>
                <div className="grid grid-cols-2 gap-1 text-sm pl-2">
                  <Link href="#crossover-bench">Crossover Bench</Link>
                  <Link href="#ss-locker">SS Locker</Link>
                  <Link href="#ms-locker">MS Locker</Link>
                  <Link href="#apron-locker">Apron Locker</Link>
                  <Link href="#book-almirah">Book Almirah</Link>
                  <Link href="#mopping-trolley">Mopping Trolley</Link>
                  <Link href="#computer-table">Computer Table</Link>
                  <Link href="#tables-chairs">Tables & Chairs</Link>
                  <Link href="#powder-sampler">Powder Sampler</Link>
                  <Link href="#trolleys-carts">Trolleys & Carts</Link>
                  <Link href="#step-ladder">Step Ladder</Link>
                  <Link href="#sink-table">Sink Table</Link>
                  <Link href="#storage-solutions">Storage Solutions</Link>
                  <Link href="#lab-accessories">Lab Accessories</Link>
                </div>
              </div>
              <div className="border-t pt-2">
                <p className="font-semibold mb-2">Tanks</p>
                <div className="grid grid-cols-2 gap-1 text-sm pl-2">
                  <Link href="#storage-tank">Storage Tank</Link>
                  <Link href="#manufacturing-tank-1">Manufacturing Tank 1</Link>
                  <Link href="#manufacturing-tank-2">Manufacturing Tank 2</Link>
                  <Link href="#manufacturing-tank-3">Manufacturing Tank 3</Link>
                  <Link href="#manufacturing-tank-4">Manufacturing Tank 4</Link>
                  <Link href="#soft-gelating-tank">Soft Gelating Tank</Link>
                  <Link href="#wfi-jacketed-tank">WFI Jacketed Tank</Link>
                  <Link href="#multimill">Multimill</Link>
                  <Link href="#hot-air-dryer">Hot Air Dryer</Link>
                </div>
              </div>
              <div className="border-t pt-2">
                <p className="font-semibold mb-2">Products</p>
                <div className="grid grid-cols-2 gap-1 text-sm pl-2">
                  {products.map((product) => (
                    <button
                      key={product.title}
                      onClick={() => handleProductClick(product.href)}
                      className="text-left hover:text-primary"
                    >
                      {product.title}
                    </button>
                  ))}
                </div>
              </div>
              <Link href="#contact" className="text-lg font-medium">
                Contact us
              </Link>
              <Link href="#clients" className="text-lg font-medium">
                Our Clients
              </Link>
              <div className="flex items-center gap-2 mt-4">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+919816273955" className="text-lg font-semibold text-primary">
                  +91 98162 73955
                </a>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex items-center gap-2">
        <SearchBar />
        <div className="hidden md:flex flex-col items-end">
          <span className="text-xs text-muted-foreground">Call</span>
          <a href="tel:+919876543210" className="text-xs font-semibold text-primary">
            +91 98162 73955
          </a>
        </div>
        <a
          href="tel:+919876543210"
          className="hidden md:flex h-7 w-7 items-center justify-center rounded-full bg-primary"
          aria-label="Call us"
        >
          <Phone className="h-3.5 w-3.5 text-primary-foreground" />
        </a>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-0 rounded-md p-1.5 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-xs font-medium leading-none">{title}</div>
            <p className="line-clamp-1 text-xs leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

