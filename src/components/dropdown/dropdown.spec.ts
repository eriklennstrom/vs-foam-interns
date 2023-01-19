import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Dropdown from '@/components/dropdown/dropdown.vue'
import DropdownItem from '@/components/dropdown/dropdown-item.vue'
import DropdownDivider from '@/components/dropdown/dropdown-divider.vue'
import Icons from '@/components/icons/icons.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
library.add(faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown)