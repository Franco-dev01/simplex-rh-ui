import React, { createContext, useMemo } from 'react'

import { defaultSettings } from '../config/layouts'
import useLocalStorage from '../hooks/useLocalStorage'

const initialState = {
  ...defaultSettings,
  onChangeMode: () => ({}),
  onToggleMode: () => ({}),
  colorOption: [],
}

const SettingsContext = createContext(initialState)

type SettingsProviderProps = {
  children: React.ReactNode
}

function SettingsProvider({ children }: SettingsProviderProps) {
  const [settings, setSettings] = useLocalStorage('settings', {
    themeMode: initialState.themeMode,
  })

  const onChangeMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      themeMode: event.target.value,
    })
  }

  const onToggleMode = () => {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === 'light' ? 'dark' : 'light',
    })
  }

  const value = useMemo(
    () => ({
      ...settings,
      onChangeMode,
      onToggleMode,
    }),
    [],
  )

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>
}

export { SettingsProvider, SettingsContext }
