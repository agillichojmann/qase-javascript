/* tslint:disable */
/* eslint-disable */
/**
 * Qase.io API
 * Qase API Specification.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@qase.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Attachment } from './attachment';
import { CustomFieldValue } from './custom-field-value';
import { TagValue } from './tag-value';

/**
 * 
 * @export
 * @interface QqlDefect
 */
export interface QqlDefect {
    /**
     * 
     * @type {number}
     * @memberof QqlDefect
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof QqlDefect
     */
    'title'?: string;
    /**
     * 
     * @type {string}
     * @memberof QqlDefect
     */
    'actual_result'?: string;
    /**
     * 
     * @type {string}
     * @memberof QqlDefect
     */
    'severity'?: string;
    /**
     * 
     * @type {string}
     * @memberof QqlDefect
     */
    'status'?: string;
    /**
     * 
     * @type {number}
     * @memberof QqlDefect
     */
    'milestone_id'?: number | null;
    /**
     * 
     * @type {Array<CustomFieldValue>}
     * @memberof QqlDefect
     */
    'custom_fields'?: Array<CustomFieldValue>;
    /**
     * 
     * @type {Array<Attachment>}
     * @memberof QqlDefect
     */
    'attachments'?: Array<Attachment>;
    /**
     * 
     * @type {string}
     * @memberof QqlDefect
     */
    'resolved'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof QqlDefect
     */
    'project_id'?: number;
    /**
     * 
     * @type {number}
     * @memberof QqlDefect
     */
    'member_id'?: number;
    /**
     * 
     * @type {string}
     * @memberof QqlDefect
     */
    'external_data'?: string;
    /**
     * 
     * @type {Array<TagValue>}
     * @memberof QqlDefect
     */
    'tags'?: Array<TagValue>;
    /**
     * 
     * @type {string}
     * @memberof QqlDefect
     */
    'created_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof QqlDefect
     */
    'updated_at'?: string;
}

