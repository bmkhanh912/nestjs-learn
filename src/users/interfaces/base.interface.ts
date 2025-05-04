/**
 * Interface representing an event with user-related details.
 */
export interface IEvent {
  /**
   * Unique identifier for the event.
   */
  id: number;

  /**
   * First name of the user.
   */
  firstname: string;

  /**
   * Last name of the user.
   */
  lastname: string;

  /**
   * Encrypted password of the user.
   */
  password: string;

  /**
   * Salt used for encrypting the password.
   */
  passwordSalt: string;

  /**
   * Email address of the user.
   */
  email: string;

  /**
   * Mobile phone number of the user.
   */
  mobile: string;

  /**
   * Phone code associated with the user's mobile number.
   */
  phone_code: string;

  /**
   * Username of the user.
   */
  username: string;

  /**
   * Preferred language of the user.
   */
  language: string;

  /**
   * Token used for verifying the user's account.
   */
  verification_token: string;

  /**
   * Indicates whether the user's account is verified.
   */
  is_verified: boolean;

  /**
   * Indicates whether the user's mobile number is verified.
   */
  is_mobile_verified: boolean;

  /**
   * Indicates whether the user's password is empty.
   */
  is_password_emtpty: boolean;

  /**
   * Indicates whether the user account originated from Joomla.
   */
  from_Joomla: boolean;

  /**
   * Token used for resetting the user's password.
   */
  resetpassword_token: string;

  /**
   * Indicates the status of the user's account (active/inactive).
   */
  status: boolean;
}
