import { Notification } from '@/domain/notification/enterprises/entities/notification';

export interface NotificationsRepository {
  findById(id: string): Promise<Notification | null>;
  create(notification: Notification): Promise<void>;
  save(notification: Notification): Promise<void>;
}
