import React from 'react'
import MapCounter from './MapCounter'
import DateRangeInline from './MapDataPicker'
import MapFilterMenu from './MapFilterMenu'
import { CloseMenuButton, MapPanelWrapper, OpenMenuButton } from './styles'
import { LuPanelRightOpen } from 'react-icons/lu'

function MapPanel({ reports, isExpanded, onClick }) {
  // Функция для обработки клика по кнопке
  const handleButtonClick = (e) => {
    e.stopPropagation() // Останавливаем всплывание, чтобы не активировать другие клики
    onClick() // Вызов переданной функции onClick
  }

  return (
    <MapPanelWrapper isExpanded={isExpanded}>
      {/* Добавление компонентов внутри панели */}
      <DateRangeInline />
      <MapFilterMenu />
      <MapCounter reports={reports} />
      <CloseMenuButton onClick={handleButtonClick}>
        <LuPanelRightOpen />
      </CloseMenuButton>
      <OpenMenuButton onClick={handleButtonClick} />
    </MapPanelWrapper>
  )
}

export default MapPanel
