import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

function MasonryContainer({ children }) {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 320: 1, 480: 2, 1024: 3 }}>
      <Masonry gutter="1rem">{children}</Masonry>
    </ResponsiveMasonry>
  )
}

export default MasonryContainer
