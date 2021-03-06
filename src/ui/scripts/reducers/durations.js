import produce from 'immer'

import {
	SET_DURATIONS_VALUE,
	SET_DURATIONS_FETCHING,
	SET_DURATIONS_ERROR
} from '../actions'

import genericState from '../utils/genericState'
import genericSubState from '../utils/genericSubState'

export const initialState = genericState

export const initialSubState = genericSubState

export default produce((draft, action) => {

	const hasDomainId = () => action.domainId != null
	const hasDomainValue = () => draft.value[action.domainId] != null

	if (hasDomainId() === true && hasDomainValue() === false) draft.value[action.domainId] = initialSubState()

	switch (action.type) {
		case SET_DURATIONS_VALUE:
			draft.value[action.domainId].value = action.payload || initialSubState().value
			break
		case SET_DURATIONS_FETCHING:
			draft.fetching = action.payload || initialState().fetching
			break
		case SET_DURATIONS_ERROR:
			draft.error = action.payload || initialState().error
			break
	}

}, initialState())