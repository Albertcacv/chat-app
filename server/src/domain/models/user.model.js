import { InvalidUserFormatException } from '../errors/invalid-user-format.exception';
import { EmailVO } from '../value-objects/email.vo';
import { NameVO } from '../value-objects/name.vo';
import { PasswordVO } from '../value-objects/password.vo';
import { UuidVO } from '../value-objects/uuid.vo';

export class UserModel {
	constructor(id, name, email, password, channels) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.channels = channels;
	}

	assertIsValid(id, name, email, password) {
		if (
			!(id instanceof UuidVO) ||
			!(name instanceof NameVO) ||
			!(email instanceof EmailVO) ||
			!(password instanceof PasswordVO)
		)
			throw new InvalidUserFormatException();
	}
}
