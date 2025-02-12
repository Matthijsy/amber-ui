import { isNone } from '@ember/utils';
import { Ability } from 'ember-can';

export default class PhotoAlbum extends Ability {
  canShow = true;

  get canCreate() {
    return this.session.hasPermission('photo-album.create');
  }

  get canEdit() {
    return this.session.hasPermission('photo-album.update') || this.isPhotoAlbumOwner(this.model);
  }

  get canSelectAllGroups() {
    return this.session.hasPermission('photo-album.update');
  }

  get canDestroy() {
    return this.session.hasPermission('photo-album.destroy');
  }

  isPhotoAlbumOwner(photoAlbum) {
    const { currentUser } = this.session;
    return !isNone(currentUser) && photoAlbum.isOwner(currentUser);
  }
}
