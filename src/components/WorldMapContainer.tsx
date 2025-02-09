import React, { useState, useEffect } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import TooltipContainer from 'src/components/TooltipContainer'
import { getCityData } from 'src/service'
import { CityData } from 'src/types'
import worldMap from '../assets/world-110m.json'

const WorldMapContainer: React.FC = () => {
  const [cityData, setCityData] = useState<CityData[]>([])
  const [tooltipData, setTooltipData] = useState<{ x: number; y: number; city: CityData } | null>(null)

  const fetchCityInfo = async (): Promise<void> => {
    try {
      const response: CityData[] = await getCityData()
      setCityData(response)
    } catch (error) {
      console.error('Error fetching city info:', error)
    }
  }

  useEffect(() => {
    fetchCityInfo()
  }, [])

  const handleMouseEnter = (event: React.MouseEvent<SVGCircleElement>, city: CityData) => {
    const { clientX, clientY } = event
    setTooltipData({
      x: clientX,
      y: clientY,
      city
    })
  }

  const handleMouseLeave = () => {
    setTooltipData(null)
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '90vh' }}>
      <ComposableMap
        projection="geoMercator"
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '100%',
          maxHeight: '100%'
        }}
      >
        <Geographies geography={worldMap}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: { fill: '#DDD', stroke: '#A9A9A9', strokeWidth: 0.3 },
                  hover: { fill: '#b5b3b3', stroke: '#A9A9A9', strokeWidth: 0.5 },
                  pressed: { fill: '#B0B0B0', stroke: '#A9A9A9', strokeWidth: 0.5 }
                }}
              />
            ))
          }
        </Geographies>

        {cityData.map(({ name, latitude, longitude, ...otherCityData }) => (
          <Marker key={name} coordinates={[Number(longitude), Number(latitude)]}>
            <circle
              r={5}
              fill="red"
              stroke="white"
              strokeWidth={2}
              onMouseEnter={(e) => handleMouseEnter(e, { name, latitude, longitude, ...otherCityData })}
              onMouseLeave={handleMouseLeave}
            />
            <text x={8} y={3} fontSize={8} fill="black">
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>

      {tooltipData && <TooltipContainer tooltipData={tooltipData} />}
    </div>
  )
}

export default WorldMapContainer
