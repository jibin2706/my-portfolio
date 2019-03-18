import React from "react"

function List({ items }) {
  return (
    <div>
      {items.map((item, index) => (
        <span className="item" key={index} style={{ display: "block" }}>
          {item}
        </span>
      ))}
    </div>
  )
}

export default List
