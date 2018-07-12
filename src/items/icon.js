import React from 'react'

const Item = () => (
  <section id="icon">
    <h2>Icon</h2>
    <p>This is a helper component that provides unified access to both our custom icons and a few libraries built into react-native-vector-icons.</p>
    <p>If no icon type is passed to the component, it's assumed that we're using one of our custom icons.</p>
    <code>
      &lt;Icon<br />
        &nbsp;&nbsp;&nbsp;type [string: FontAwesome, Entypo, Ionicons, Material]<br />
        &nbsp;&nbsp;&nbsp;name [string]<br />
        &nbsp;&nbsp;&nbsp;style [style object]<br />
      /&gt;
    </code>
  </section>
)

export default Item
