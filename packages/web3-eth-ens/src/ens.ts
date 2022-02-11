import { Address } from 'web3-utils';
import { RevertInstructionError } from 'web3-common';
import { NonPayableCallOptions, TransactionReceipt } from 'web3-eth-contract';
import { Registry } from './registry';

export class ENS {
	private _registryAddress: string;
	private readonly registry: Registry;

	public constructor() {
		this.registry = new Registry();
		this._registryAddress = ''; // TODO change this when eth.net is finished
	}

	public get registryAddress(): string {
		return this._registryAddress;
	}

	public set registryAddress(registryAddress: string) {
		this._registryAddress = registryAddress;
	}

	/**
	 * Returns the Resolver by the given address
	 */
	public async getResolver(name: string): Promise<unknown> {
		return this.registry.getResolver(name);
	}

	/**
	 * set the resolver of the given name
	 */
	public async setResolver(
		name: string,
		address: Address,
		txConfig: NonPayableCallOptions,
	): Promise<TransactionReceipt | RevertInstructionError> {
		return this.registry.setResolver(name, address, txConfig);
	}

	/**
	 * Sets the owner, resolver and TTL for a subdomain, creating it if necessary.
	 */
	public async setSubnodeRecord(
		name: string,
		label: string,
		owner: Address,
		resolver: Address,
		ttl: string,
		txConfig: NonPayableCallOptions,
	): Promise<TransactionReceipt | RevertInstructionError> {
		return this.registry.setSubnodeRecord(name, label, owner, resolver, ttl, txConfig);
	}

	/**
	 * Sets or clears an approval by the given operator.
	 */
	public async setApprovalForAll(
		operator: Address,
		approved: boolean,
		txConfig: NonPayableCallOptions,
	): Promise<TransactionReceipt | RevertInstructionError> {
		return this.registry.setApprovalForAll(operator, approved, txConfig);
	}

	/**
	 * Returns true if the operator is approved
	 */
	public async isApprovedForAll(owner: Address, operator: Address): Promise<unknown> {
		return this.registry.isApprovedForAll(owner, operator);
	}

	/**
	 * Returns true if the record exists
	 */
	public async recordExists(name: string): Promise<unknown> {
		return this.registry.recordExists(name);
	}

	/**
	 * Returns the address of the owner of an ENS name.
	 */
	public async setSubnodeOwner(
		name: string,
		label: string,
		address: Address,
		txConfig: NonPayableCallOptions,
	): Promise<TransactionReceipt | RevertInstructionError> {
		return this.registry.setSubnodeOwner(name, label, address, txConfig);
	}

	/**
	 * Returns the address of the owner of an ENS name.
	 */
	public async getTTL(name: string): Promise<unknown> {
		return this.registry.getTTL(name);
	}

	/**
	 * Returns the address of the owner of an ENS name.
	 */
	public async setTTL(
		name: string,
		ttl: string,
		txConfig: NonPayableCallOptions,
	): Promise<TransactionReceipt | RevertInstructionError> {
		return this.registry.setTTL(name, ttl, txConfig);
	}

	/**
	 * Returns the owner by the given name and current configured or detected Registry
	 */
	public async getOwner(name: string): Promise<unknown> {
		return this.registry.getOwner(name);
	}

	/**
	 * Returns the address of the owner of an ENS name.
	 */
	public async setOwner(
		name: string,
		address: Address,
		txConfig: NonPayableCallOptions,
	): Promise<TransactionReceipt | RevertInstructionError> {
		return this.registry.setOwner(name, address, txConfig);
	}

	// TODO in resolver
	// public getAddress () { return true };

	// TODO in resolver
	// public setAddress () { return true };

	// TODO in resolver
	// public getPubkey () { return true };

	// TODO in resolver
	// public setPubkey (): boolean { return true };

	// TODO in resolver
	// public getContent (): boolean { return true };

	// TODO in resolver
	// public setContent (): boolean { return true };

	// TODO in resolver
	// public getContentHash (): boolean { return true };

	// TODO in resolver
	// public setContentHash (): boolean { return true };

	// TODO in resolver
	// public getMultiHash (): boolean { return true };

	// TODO in resolver
	// public setMultiHash (): boolean { return true };

	// TODO after eth.net.getNetworkType is complete
	// public checkNetwork (): boolean {
	// return true;
	//  };

	// TODO finish in resolver
	// public supportsInterface(){
	//     return true;
	// }
}