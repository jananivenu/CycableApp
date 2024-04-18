import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

function MasonryContainer({ children }) {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 479: 1, 767: 2, 1023: 3 }}>
      <Masonry gutter="1rem">{children}</Masonry>
    </ResponsiveMasonry>
  )
}

export default MasonryContainer
