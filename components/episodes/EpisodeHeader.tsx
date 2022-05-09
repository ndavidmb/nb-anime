import Image from 'next/image'
import React from 'react'
import { Card } from '../../ui/Card'
import { Chip } from '../../ui/Chip'

export const EpisodeHeader = () => {
  return (
    <Card extraClasses="flex gap-3">
      <Image
        src="https://pics.filmaffinity.com/gotobun_no_hanayome-504431334-large.jpg"
        className="rounded-md w-1/5 object-cover"
        alt="Img Anime"
        width={300}
        height={400}
      />
      <div className="w-2/5">
        <h2 className="text-2xl font-bold text-indigo-700">
          Descripción
        </h2>
        <p>
          Sunt velit dolor ad sunt ea. Ullamco consequat
          enim consectetur quis. Anim magna est tempor
          proident labore fugiat magna. Labore mollit sunt
          dolor nulla irure occaecat cupidatat dolor
          excepteur amet. Eu non aliqua duis nostrud.
          Proident aliquip pariatur sint excepteur anim
          aliquip aliquip aute. Quis commodo duis consequat
          incididunt sunt aliqua deserunt ipsum ut et veniam
          in consequat.
        </p>

        <Chip text="Ecchi" fontSize="sm" />
      </div>

      <div className="w-2/5 bg-gray-100 p-2">
        <h2 className="text-2xl font-bold text-indigo-700">
          Similares
        </h2>
      </div>
    </Card>
  )
}
