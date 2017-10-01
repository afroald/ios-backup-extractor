import Backup from 'ios-backup';
import BSON from 'bson';

const bson = new BSON();

function decorate(backup) {
  return new Proxy(backup, {
    get(target, name) {
      if (name !== 'getFiles') {
        return target[name];
      }

      return async function getFiles() {
        const files = await target.getFiles();
        return bson.serialize(files);
      };
    },
  });
}

export default function JsonBackup(...args) {
  Backup.apply(this, args);
  return decorate(this);
}

JsonBackup.create = async function create(...args) {
  const backup = await Backup.create(...args);
  return decorate(backup);
};
