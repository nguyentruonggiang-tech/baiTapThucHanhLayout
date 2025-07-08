import Item from './Item';

export default function Body() {
  const items = [
    {
      title: 'Card title',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.',
      image: 'https://placehold.co/500x325/png'
    },
    {
      title: 'Card title',
      content: 'Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.',
      image: 'https://placehold.co/500x325/png'
    },
    {
      title: 'Card title',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.',
      image: 'https://placehold.co/500x325/png'
    },
    {
      title: 'Card title',
      content: 'Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.',
      image: 'https://placehold.co/500x325/png'
    }
  ];

  return (
    <div className="container">
      <div className="row">
        {items.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
