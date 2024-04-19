import { HashCompare } from '@/domain/forum/application/cryptography/hash-compare'
import { HashGenerator } from '@/domain/forum/application/cryptography/hash-generator'
import { compare, hash } from 'bcryptjs'

export class BcryptHasher implements HashGenerator, HashCompare {
  private HASH_SALT_LENGTH = 8

  async hash(plain: string): Promise<string> {
    return hash(plain, this.HASH_SALT_LENGTH)
  }

  async compare(plain: string, hashed: string): Promise<boolean> {
    return compare(plain, hashed)
  }
}
