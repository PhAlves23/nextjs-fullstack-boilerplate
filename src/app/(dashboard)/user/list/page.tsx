import React from 'react'

import { getUserActionHttp } from '@/actions/user'
import PageContainer from '@/components/page-container'
import { Heading } from '@/components/ui/heading'

import { listUserColumns } from './_components/list-user-columns'
import { ListUserDataTable } from './_components/list-user-data-table'

export default async function ListUserPage() {
  const { action } = await getUserActionHttp()
  const result = await action()

  return (
    <PageContainer>
      <Heading
        title='Listagem de usuários'
        description='Página de listagem de usuários'
      />

      <div className='container mx-auto py-10'>
        <ListUserDataTable
          columns={listUserColumns}
          data={result.data || []}
        />
      </div>
    </PageContainer>
  )
}
