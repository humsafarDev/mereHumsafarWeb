import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/16/solid'
import { Copy, MessageSquareWarning, Pin, Reply, Smile, Trash } from 'lucide-react'


export default function DropdownMenu({handleMenuClick=() =>{}}) {





  
  return (
    // <div className="  top-24 w-52 text-right">
      <Menu >
        <MenuButton className="inline-flex items-center gap-2   px-3 py-1.5   text-secondary-600 ">
          {/* Options */}
          <ChevronDownIcon className="size-7 fill-secondary-600" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right rounded-xl border border-text-secondary-600 bg-white p-1 text-sm/6 text-secondary-600 transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
        >
          <MenuItem>
            <button onClick={() => handleMenuClick("reply")} className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-secondary-600">
              <Reply className="size-4 fill-secondary-600" />
              Reply
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">⌘E</kbd>
            </button>
          </MenuItem>
          <MenuItem>
            <button onClick={ () => handleMenuClick("react")}  className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
              <Smile className="size-4 fill-white/30" />
              React
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">⌘A</kbd>
            </button>
          </MenuItem>
          <MenuItem>
            <button onClick={() => handleMenuClick("copy")} className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
              <Copy className="size-4 fill-white/30" />
              Copy
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">⌘D</kbd>
            </button>
          </MenuItem>
          {/* <div className="my-1 h-px bg-white/5" /> */}
          <MenuItem>
            <button onClick={() =>handleMenuClick("pin")} className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
              <Pin className="size-4 fill-white/30" />
              Pin
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">⌘A</kbd>
            </button>
          </MenuItem>
          <MenuItem>
            <button onClick={() =>handleMenuClick("report")} className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
              <MessageSquareWarning className="size-4 fill-white/30" />
              Report
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">⌘A</kbd>
            </button>
          </MenuItem>
        
          <MenuItem>
            <button onClick={() =>handleMenuClick("delete")} className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
              <Trash className="size-4 fill-white/30" />
              Delete
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">⌘D</kbd>
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
  //  </div>
  )
}
