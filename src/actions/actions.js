/*
 *  action type constants
 */

export const GET_CHANGE          = 'GET_CHANGE';
export const CREATE_CHANGE       = 'CREATE_CHANGE';
export const UPDATE_CHANGE       = 'UPDATE_CHANGE';
export const DELETE_CHANGE       = 'DELETE_CHANGE';
export const LIST_CHANGES        = 'LIST_CHANGES';
export const SHOW_CHANGE_FORM    = 'SHOW_CHANGE_FORM';

export const GET_APP            = 'GET_APP';
export const CREATE_APP         = 'CREATE__APP';
export const UPDATE_APP         = 'UPDATE_APP';
export const DELETE_APP         = 'DELETE_APP';
export const LIST_APPS          = 'LIST_APPS';

export const SHOW_MENU          = 'SHOW_MENU';

/*
 * action creator functions
 */
// change stuff
export function createChange(change)
{
    return { type: CREATE_CHANGE, change};
}

export function showChangeForm()
{
    return { type: SHOW_CHANGE_FORM };
}

export function updateChange(change)
{
    return { type: UPDATE_CHANGE, change};
}

export function deleteChange(change)
{
    return { type: DELETE_CHANGE, change};
}

export function getChange(id)
{
    return { type: GET_CHANGE, id};
}

export function listChanges()
{
    return { type: LIST_CHANGES};
}

// app stuff
export function createApp(change)
{
    return { type: CREATE_APP, change};
}

export function updateApp(change)
{
    return { type: UPDATE_APP, change};
}

export function deleteApp(change)
{
    return { type: DELETE_APP, change};
}

export function getApp(id)
{
    return { type: GET_APP, id};
}

export function listApps()
{
    return { type: LIST_APPS};
}

export function showMenu()
{
    return { type: SHOW_MENU};
}
