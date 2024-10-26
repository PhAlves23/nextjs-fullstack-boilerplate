'use client'

import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'
import * as React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { UserWithoutPasswordType } from '@/entities'

export const listUserColumns: ColumnDef<UserWithoutPasswordType>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: 'ID',
    cell: ({ row }) => <div>{row.getValue('id')}</div>,
  },
  {
    accessorKey: 'name',
    header: 'Nome',
    cell: ({ row }) => <div>{row.getValue('name')}</div>,
  },
  {
    accessorKey: 'email',
    header: ({ column }) => (
      <Button
        variant='ghost'
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        E-mail
        <ArrowUpDown className='ml-2 h-4 w-4' />
      </Button>
    ),
    cell: ({ row }) => <div className='lowercase'>{row.getValue('email')}</div>,
  },
  {
    accessorKey: 'emailVerified',
    header: 'E-mail verificado',
    cell: ({ row }) => {
      const emailVerified = row.getValue('emailVerified')
      return (
        <div>
          {typeof emailVerified === 'boolean'
            ? emailVerified.toString()
            : 'N/A'}
        </div>
      )
    },
  },
  {
    accessorKey: 'image',
    header: 'Imagem',
    cell: ({ row }) => (
      <div>
        <Avatar className='h-8 w-8'>
          <AvatarImage
            src={row.getValue('image')}
            alt={row.getValue('name')}
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    ),
  },
  {
    accessorKey: 'createdAt',
    header: 'Criado em',
    cell: ({ row }) => {
      const createdAt = new Date(row.getValue('createdAt'))
      return <div>{createdAt.toLocaleDateString()}</div>
    },
  },
  {
    accessorKey: 'updatedAt',
    header: 'Atualizado em',
    cell: ({ row }) => {
      const updatedAt = new Date(row.getValue('updatedAt'))
      return <div>{updatedAt.toLocaleDateString()}</div>
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const user = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant='ghost'
              className='h-8 w-8 p-0'
            >
              <span className='sr-only'>Abrir menu</span>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.id)}
            >
              Copiar ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            {user.email !== null && (
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(user.email ?? '')}
              >
                Copiar E-mail
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
