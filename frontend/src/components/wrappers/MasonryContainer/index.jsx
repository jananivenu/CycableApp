import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

function MasonryContainer({ children }) {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 500: 2, 750: 3 }}>
      <Masonry gutter="1rem">{children}</Masonry>
    </ResponsiveMasonry>
  )
}

export default MasonryContainer
