// Flex Container Properties
// Here’s a container with 3 span flex items, without Flexbox:

// <div class="box">
//   <span class="item">
//     <img src="/images/dino.svg" width="64" height="45" alt="Dino Sammy">
//   </span>
//   <span class="item">
//     <img src="/images/steampunk.svg" width="64" height="45" alt="Steampunk Sammy">
//   </span>
//   <span class="item">
//     <img src="/images/skeleton.svg" width="64" height="45" alt="Skeleton Sammy">
//   </span>
// </div>
// Punk Sammy Pony Sammy Dino Sammy
// display: flex
// Now, let’s improve it automagically simply by setting display: flex on the container. Notice how the items now automatically expand to the available space in the container:

// .container {
//   display: flex;
// }
// Punk Sammy
// Pony Sammy
// Dino Sammy
// flex-direction
// You can change the direction of the items using the flex-direction property:

// .container {
//   display: flex;
//   flex-direction: column;
// }
// Punk Sammy
// Pony Sammy
// Dino Sammy
// The default is row and the additional available values are row-reverse, column, column-reverse.

// row-reverse and column-reverse change the visual order of the items, without having to change the order of the HTML markup:

// .container {
//   display: flex;
//   flex-direction: column-reverse;
// }
// Punk Sammy
// Pony Sammy
// Dino Sammy
// The ability to change between the row and column directions makes it very easy to adapt layouts on smaller devices with just one CSS rule change in a media query.

// justify-content
// Use justify-content to align the items on the main axis. The main axis is the Y axis when flex-direction is column and the X axis when flex-direction is row.

// The default value is flex-start and the additional available values are flex-end, center, space-between, space-around and space-evenly.

// justify-content: flex-start flex-end center space-between space-around space-evenly
// Punk Sammy
// Pony Sammy
// Dino Sammy
// align-items
// align-items is analogous to justify-content, but allows to align the items in the cross-axis. It defaults to stretch and also accepts flex-start, flex-end, center and baseline:

// align-items: stretch flex-start flex-end center baseline
// Punk Sammy
// Pony Sammy
// Dino Sammy
// align-content
// align-content is similar to align-items, but it only has an effect when there’s more than one line of flex items (see flex-wrap below). It defaults to stretch and also accepts flex-start, flex-end, center, space-between, space-evenly:

// align-content: stretch flex-start flex-end center space-between space-around space-evenly
// Punk Sammy
// Pony Sammy
// Dino Sammy
// flex-wrap
// By default items won’t wrap (default of nowrap), so if the items take more space than what’s available they’ll overflow. This can be fixed with flex-wrap set to a value of wrap:

// flex-wrap: nowrap wrap
// Punk Sammy
// Pony Sammy
// Dino Sammy
// Flex Item Properties
// align-self
// align-self is just like align-items, but only for specific items. This makes it easy to have flex items that break out of the main rule:

// align-self: stretch flex-start flex-end center baseline
// Punk Sammy
// Pony Sammy
// Dino Sammy
// flex-grow
// With flex-grow we can control the amount of space that a flex item takes compared to the other items. flex-grow accepts a numeric value and it represents a fraction of the available space, depending on the flex-grow value of the other items. It defaults to a value of 0, which means that the item won’t take up available empty space.

// Since it’s based on proportion, setting all items to, for example, a flex-grow of 200 is the same as setting all items to a flex-grow of 1.

// In the below example, the first item has a default flex-grow value of 0, the second item has a value of 1 and the third item has a value of 2:

// Punk Sammy
// Pony Sammy flex-grow: 1
// Dino Sammy flex-grow: 2
// flex-shrink
// flex-shrink is the opposite of flex-grow and defines the shrinkability of items. It defaults to a value of 1, meaning that the items can shrink and, just as with flex-grow, it’s based on proportion with the other items.

// flex-basis
// flex-basis defines the starting space that an item takes, but it’s not a guarantee because it also depends on space availability or if there’s extra space to fill.

// To illustrate, in the following example, all items have a flex-basis of 25%:

// Punk Sammy
// Pony Sammy
// Dino Sammy
// …but now let’s also give a flex-grow of 1 to the first flex item. In the following example, all items have a flex-basis of 25%, but the first item takes up the rest of the available space because it has a flex-grow value of 1:

// Punk Sammyflex-grow:1
// Pony Sammy
// Dino Sammy
// …and finally, here our third item has a flex-basis of 77% and refuses to shrink to make space for the other items that have a flex-basis of 25% because it has a flex-shrink value of 0:

// Punk Sammy
// Pony Sammy
// Dino Sammyflex-basis: 77%; flex-shrink:0;
// .item {
//   flex-basis: 25%;
// }
// .item:last-child {
//   flex-basis: 77%;
//   flex-shrink: 0;
// }
// flex
// flex is a shorthand property for the combination of flex-grow, flex-shrink and flex-basis. For example, here’s the syntax for an item that has a flex-grow value of 2, flex-shrink value of 0 and flex-basis of 2rem:

// .item {
//   flex: 2 0 2rem;
// }