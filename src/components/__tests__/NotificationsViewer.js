import NotificationsViewer from '../NotificationsViewer';
import renderer from 'react-test-renderer';
import React from 'react';
import { delay } from 'redux-saga';

jest.mock('../../services/NotificationsService');

const notificationsService = require('../../services/NotificationsService').default;

describe('The notifications viewer', () => {
  beforeAll(() => {
    notificationsService.__setCount(3);
  })
  it('should display the correct number of notifications', async() => {
    const tree = renderer
      .create(
        <NotificationsViewer />
      );
    await delay();

    const instance = tree.root;
    const component = instance.findByProps({className: 'notifications'});
    const text = component.children[0];
    expect(text).toEqual('3');
  });
})
