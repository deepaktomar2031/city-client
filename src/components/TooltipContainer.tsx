import React from 'react'
import { CityData } from 'src/types'

const renderTooltipFields = (data: Record<string, string>) => {
  return Object.entries(data).map(([key, value]) => {
    return (
      <div key={key}>
        <strong>{key.replace(/_/g, ' ')}:</strong> {value as React.ReactNode}
      </div>
    )
  })
}

const TooltipContainer: React.FC<{
  tooltipData: {
    x: number
    y: number
    city: CityData
  }
}> = ({ tooltipData }) => {
  const { x, y, city } = tooltipData

  const cityDetails = {
    'City Name': city.name,
    'City Native Name': city.name_native,
    Country: city.country,
    Continent: city.continent,
    Latitude: city.latitude,
    Longitude: city.longitude,
    Population: city.population,
    Founded: city.founded,
    Landmarks: city.landmarks.join(', ')
  }

  return (
    <div
      style={{
        position: 'absolute',
        top: y + 10,
        left: x + 10,
        background: '#FFFFFF',
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
        pointerEvents: 'none',
        zIndex: 1000
      }}
    >
      {renderTooltipFields(cityDetails)}
    </div>
  )
}

export default TooltipContainer
