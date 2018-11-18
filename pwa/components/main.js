import { h } from 'preact';

import Section from '../ux/section';
import Title from '../ux/title';
import Footer from '../ux/footer';

import TodoApp from './todo-app';

export default () => (
  <Section>
    <TodoApp />
    <Footer>
      Hecho con prisas por <b>k1r0s</b> 2018
    </Footer>
  </Section>
)
