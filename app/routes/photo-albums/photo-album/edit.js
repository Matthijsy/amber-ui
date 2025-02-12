import { AuthenticatedRoute } from 'alpha-amber/routes/application/application';

export default class EditPhotoAlbumRoute extends AuthenticatedRoute {
  breadCrumb = { title: 'Foto album aanpassen' }

  canAccess(model) {
    return this.can.can('edit photo-albums', model);
  }

  model() {
    return this.modelFor('photo-albums.photo-album');
  }

  deactivate() {
    super.deactivate();
    this.controller.model?.rollbackAttributes();
  }
}
