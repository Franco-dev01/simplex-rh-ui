import React from 'react'

export default function useProjectCreation() {
  const [iOpen, setIsOpen] = React.useState<boolean>(false)
  const handleCloseDialog = () => setIsOpen(false)
  const handleOpenDialog = () => setIsOpen(true)

  return { iOpen, handleCloseDialog, handleOpenDialog }
}
