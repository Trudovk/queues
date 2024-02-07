/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Groups = "groups",
	Invites = "invites",
	QueueEntry = "queueEntry",
	Queues = "queues",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type GroupsRecord = {
	invites?: RecordIdString[]
	name?: string
	president?: RecordIdString
	queues?: RecordIdString[]
	students?: RecordIdString[]
}

export type InvitesRecord = {
	active?: boolean
	group?: RecordIdString
	token?: string
}

export type QueueEntryRecord = {
	descriprion?: string
	position?: number
	queue?: RecordIdString
	student?: RecordIdString
}

export type QueuesRecord = {
	active?: boolean
	description?: string
	groups?: RecordIdString[]
	name?: string
}

export enum UsersFieldOptions {
	"Студент" = "Студент",
	"Преподаватель" = "Преподаватель",
	"Админ" = "Админ",
}
export type UsersRecord = {
	avatar?: string
	field?: UsersFieldOptions
	group?: RecordIdString
	lastName?: string
	middleName?: string
	name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type GroupsResponse<Texpand = unknown> = Required<GroupsRecord> & BaseSystemFields<Texpand>
export type InvitesResponse<Texpand = unknown> = Required<InvitesRecord> & BaseSystemFields<Texpand>
export type QueueEntryResponse<Texpand = unknown> = Required<QueueEntryRecord> & BaseSystemFields<Texpand>
export type QueuesResponse<Texpand = unknown> = Required<QueuesRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	groups: GroupsRecord
	invites: InvitesRecord
	queueEntry: QueueEntryRecord
	queues: QueuesRecord
	users: UsersRecord
}

export type CollectionResponses = {
	groups: GroupsResponse
	invites: InvitesResponse
	queueEntry: QueueEntryResponse
	queues: QueuesResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'groups'): RecordService<GroupsResponse>
	collection(idOrName: 'invites'): RecordService<InvitesResponse>
	collection(idOrName: 'queueEntry'): RecordService<QueueEntryResponse>
	collection(idOrName: 'queues'): RecordService<QueuesResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
