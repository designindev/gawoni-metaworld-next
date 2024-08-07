'use client'

import { Box, Button, Container, TextField, Typography, Grid } from '@mui/material'
import { storage, nftsRef } from 'app/api/nfts/db'
import { addDoc, getDocs } from 'firebase/firestore'
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const Page = () => {
  const methods = useForm<{ title: string; description: string }>({
    defaultValues: { title: 'todo 1', description: 'desc' },
  })
  const [todos, setTodos] = useState<any[]>([])
  const [fileUpload, setFileUpload] = useState<any>(null)

  const fetchTodos = async () => {
    const data = await getDocs(nftsRef)
    setTodos(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    )
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  const handleSubmit = async (data: { title: string; description: string }) => {
    if (!fileUpload) return
    const filesFolderRef = ref(storage, fileUpload.name)
    const a = await uploadBytes(filesFolderRef, fileUpload)

    const url = await getDownloadURL(filesFolderRef)
    const url2 = await getDownloadURL(a.ref)
    debugger
    await addDoc(nftsRef, { ...data, url })
    fetchTodos()
  }

  return (
    <section className='section'>
      <Container>
        <Grid container>
          {todos.map((el, i) => {
            return (
              <Grid item key={i}>
                <Box p={5} border={'1px solid blue'} key={i}>
                  <h2>{el.title}</h2>
                  <p>{el.description}</p>
                  <img src={el.url as string} alt='' />
                  <Button
                    onClick={async () => {
                      const filesFolderRef = ref(storage, el.url)
                      console.log(filesFolderRef)
                      await deleteObject(filesFolderRef)
                      fetchTodos()
                    }}
                  >
                    delete image
                  </Button>
                </Box>
              </Grid>
            )
          })}
        </Grid>
        <Typography component='h1'>todo list</Typography>
        <form onSubmit={methods.handleSubmit(handleSubmit)}>
          <TextField {...methods.register('title')} />
          <TextField {...methods.register('description')} />
          <input type='file' onChange={(e) => setFileUpload(e.target.files?.[0])} />
          <Button type='submit'>Submit</Button>
        </form>
      </Container>
    </section>
  )
}

export default Page
