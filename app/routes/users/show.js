import { computed } from '@ember/object';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import ShowRouteUnauthenticated from 'alpha-amber/routes/application/show';

const UserShowRouteUnauthenticated = ShowRouteUnauthenticated.extend(AuthenticatedRouteMixin, {
  canAccess() {
    return this.can('show individual users');
  },
  modelName: 'user',
  title: computed('controller.model.fullName', function() {
    return this.get('controller.model.fullName');
  }),
  parents: ['users.index'],
  pageActions: computed('controller.model', function() {
    const user = this.get('controller.model');
    return [
      {
        link: 'users.edit',
        title: 'Wijzigen',
        icon: 'pencil-alt',
        linkArgument: user,
        canAccess: this.can('edit user', user)
      },
      {
        link: 'users.destroy',
        title: 'Verwijderen',
        icon: 'trash',
        linkArgument: user,
        canAccess: this.can('destroy users')
      },
      {
        link: 'users.resend_activation',
        title: 'Verstuur activatie code',
        icon: 'paper-plane',
        linkArgument: user,
        canAccess: this.can('resend activation code of user', user)
      }
    ];
  }),
  tabItems: computed('controller.model', function() {
    const user = this.get('controller.model');
    return [
      {
        link: 'users.show',
        title: 'Algemeen',
        linkArgument: user,
        canAccess: this.can('show users')
      },
      {
        link: 'users.show-groups',
        title: 'Groepen',
        linkArgument: user,
        canAccess: this.can('show memberships')
      },
      {
        link: 'users.show-settings',
        title: 'Instellingen',
        linkArgument: user,
        canAccess: this.can('edit user', user)
      },
      {
        link: 'users.show-mail',
        title: 'Mail aliassen',
        linkArgument: user,
        canAccess: this.can('show mail-aliases')
      },
      {
        link: 'users.show-mandates',
        title: 'Incasso mandaten',
        linkArgument: user,
        canAccess: true
      },
      {
        link: 'users.show-permissions',
        title: 'Rechten',
        linkArgument: user,
        canAccess: this.can('show permissions-users')
      }
    ];
  })
});

export default UserShowRouteUnauthenticated;
