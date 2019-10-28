import React from 'react';
import renderer from 'react-test-renderer';
import TodoList from '../../components/todo-list';

describe('<TodoList />', () => {
  it('can render initially in ul', () => {
    let app = shallow(<TodoList todos={[]}/>);
    expect(app.find('ul').exists()).toBe(true);
    expect(app.find('ul li').exists()).toBe(false);
  });

  it('can add todos by passing props', () => {

    let app = mount(<TodoList todos={[{id: 0, text: 'test', completed: true }]} />);
    expect(app.find('ul li').exists()).toBe(true);
  });

  it('renders consistently', () => {
    const tree = renderer.create(<TodoList todos={[]} />).toJSON();
    // console.log(tree);
    expect(tree).toMatchSnapshot();
  });
});
